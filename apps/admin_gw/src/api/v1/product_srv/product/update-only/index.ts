
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('put', '/api/v1/products/:uuid/only')
class UpdateProductController extends Controller {
  async send() {
    const { uuid } = super.params;
    const data = super.body;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/' + uuid + '/only',
      method: 'put',
      data,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UpdateProductController;