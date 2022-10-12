
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/groups')
class CreateGroupController extends Controller {
  async send() {
    const body = super.body;

    await request({
      method: 'post',
      url: process.env['PRODUCT_API_SRV'] + '/groups',
      data: body,
    });

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/groups',
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default CreateGroupController;