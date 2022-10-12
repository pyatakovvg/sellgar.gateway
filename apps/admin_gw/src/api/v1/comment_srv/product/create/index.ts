
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/units')
class CreateUnitController extends Controller {
  async send() {
    const body = super.body;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/units',
      method: 'post',
      data: body,
    });

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/units',
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default CreateUnitController;
