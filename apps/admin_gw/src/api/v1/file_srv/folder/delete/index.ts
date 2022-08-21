
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('delete', '/api/v1/folders/:uuid')
class CurrentUserController extends Controller {
  async send() {
    const params = super.params;

    const result = await request({
      method: 'delete',
      url: process.env['FILE_API_SRV'] + '/folders/' + params['uuid'],
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CurrentUserController;