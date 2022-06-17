
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/groups')
class CreateGroupController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'post',
      url: process.env['PRODUCT_API_SRV'] + '/groups',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateGroupController;