import Route from './Route';

@Route.Route({
  routeBase: '',
})
export default class RouteRooms extends Route {
  constructor(params) {
    super({ ...params });
  }

  @Route.Get({ path: '/' })
  index(ctx) {
    this.sendOk(ctx, {
      name: packageJson.name,
      version: packageJson.version,
    });
  }
}
