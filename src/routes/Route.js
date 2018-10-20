import { Route as RouteBase } from 'koa-smart';

export default class Route extends RouteBase {
  // static accesses = {
  //   public: -1,
  //   connected: 100,
  //   admin: GROUPS.ADMIN_ID,
  //   client: GROUPS.CLIENT_ID,
  // };

  constructor(params) {
    super(params);
  }

  async _addUserInBody(ctx, id) {
    const user = await this.models.users.getUserById(id || ctx.state.user.id);
    if (!user) {
      this.throw(401);
    }
    ctx.body._user = user.dataValues;
    ctx.body._user.password = undefined;
    return ctx.body._user;
  }

  async beforeRoute(ctx, infos, next) {
    // the "beforeRoute" function is executed before any call to a route belonging to the same class
    // (or a class ihneriting from it) is made.
    await super.beforeRoute(ctx, infos, next);
  }
}
