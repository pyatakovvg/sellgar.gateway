
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

    return new Result()
      .data(null)
      .build();
  }
}

export default CreateUnitController;
