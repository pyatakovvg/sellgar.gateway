
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/products/groups')
class GetProductGroupController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/groups',
      params: {
        ...query,
      },
    });

    console.log(result)

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetProductGroupController;