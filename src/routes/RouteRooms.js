import Route from './Route';

export default class RouteRooms extends Route {
  constructor(params) {
    super({ ...params, model: 'rooms' });
  }

  @Route.Get({
    path: '',
  })
  async rooms(ctx) {
    const rooms = await this.model.getRooms(this.models);
    this.sendOk(ctx, rooms, null);
  }
}
