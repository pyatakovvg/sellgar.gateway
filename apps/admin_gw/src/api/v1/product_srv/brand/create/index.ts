
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

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/brands',
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default CreateBrandController;
