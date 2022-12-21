
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/brands')
class CreateBrandController extends Controller {
  async send() {
    const body = super.body;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/brands',
      method: 'post',
      data: body,
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default CreateBrandController;
