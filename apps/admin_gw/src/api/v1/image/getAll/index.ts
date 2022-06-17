
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/images')
class CurrentUserController extends Controller {
  async send() {
    const result = await request({
      url: process.env['FILE_API_SRV'] + '/images',
      params: {
        size: 'small',
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CurrentUserController;