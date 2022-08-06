
import request from '@package/request';
// import { NotFoundError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';

// import productBuilder from './builder/product';


@Route('get', '/api/v1/products/groups')
class GetProductsController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/groups',
      params: {
        ...query,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetProductsController;