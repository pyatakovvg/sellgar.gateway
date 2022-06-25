
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/images/:uuid')
class CurrentUserController extends Controller {
  async send() {
    const params = super.params;
    const query = super.query;

    const result = await request({
      url: process.env['FILE_API_SRV'] + '/images/' + params['uuid'],
      method: 'get',
      responseType: 'stream',
      params: {
        size: query['size'],
      },
    });

    return new Result()
      .data(result['data'])
      .stream();
  }
}

export default CurrentUserController;