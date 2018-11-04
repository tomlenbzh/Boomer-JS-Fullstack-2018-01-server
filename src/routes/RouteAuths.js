import Route from './Route';
import utils, { crypto } from '../base/utils';

@Route.Route({
  routeBase: 'auths',
})
export default class RouteAuths extends Route {
  constructor(params) {
    super({ ...params, model: 'users' });
  }

  @Route.Post({
    params: {
      pseudo: false,
      password: true,
      password_confirmation: true,
    },
  })
  async signup(ctx) {
    console.log(ctx.request.body);
    const body = ctx.request.body;
    if (body.password_confirmation !== body.password) {
      this.throw(400, ctx.state.__('Different password'));
    }
    const user = await this.model.create({
      ...body,
    });

    const userInBody = await this._addUserInBody(ctx, user.id);
    this.sendCreated(ctx, userInBody, ctx.state.__('Your account has been created'));
  }

  @Route.Post({
    params: {
        pseudo: {
            __force: true,
            __func: [utils.trim],
        },
        password: {
            __force: true,
            __func: [utils.trim],
        },
    },
  })
  async login(ctx) {
    const { pseudo, password } = ctx.request.body;

    const user = await this.model.findOne({ where: { pseudo: pseudo } });
    if (user && crypto.compartPassword(password, user.password)) {
      delete user.dataValues.password;
    } else {
      this.throw(401, ctx.state.__('Incorrect pseudo or password'));
    }

    await ctx.loginUser(user.dataValues);
    const userInBody = await this._addUserInBody(ctx);
    this.sendOk(ctx, userInBody, ctx.state.__('You are connected'));
  }

  @Route.Get({
  })
  async logout(ctx) {
    await ctx.logoutUser();
    this.sendOk(ctx, null, ctx.state.__('Sign Out'));
  }
}
