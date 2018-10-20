import config from 'config';
import { jsonwebtoken as jwt } from 'koa-smart/utils';

const configJWT = config.jsonwebtoken;

function loginUser(ctx) {
  return async (user) => {
    const userToRegister = {
      id: user.id,
      loginTokenVersion: config.loginTokenVersion,
    };
    const token = jwt.sign(userToRegister, configJWT.privateKey, configJWT.options);
    ctx.state.user = userToRegister;
    ctx.body.token = token;
    ctx.body.expires = userToRegister.expires;
    return { token, expires: userToRegister.expires };
  };
}

function logoutUser(ctx) {
  return async () => {
    const token = ctx.get('Authorization');
    if (token) {
      await ctx.models.tokens.consumeOne({ token });
    }
    ctx.state.user = undefined;
  };
}


export default async (ctx, next) => {
  ctx.loginUser = loginUser(ctx);
  ctx.logoutUser = logoutUser(ctx);
  await next();
};
