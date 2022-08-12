
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/images')
class CurrentUserController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['FILE_API_SRV'] + '/images',
      params: {
        ...query,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CurrentUserController;