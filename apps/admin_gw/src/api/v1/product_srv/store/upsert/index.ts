
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/store')
class UpdateStoreController extends Controller {
  async send() {
    const data = super.body;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/store',
      method: 'post',
      data,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UpdateStoreController;