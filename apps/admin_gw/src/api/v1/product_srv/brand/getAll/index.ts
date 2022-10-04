
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import brandBuilder from './builders/brand';


@Route('get', '/api/v1/brands')
class GetBrandController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/brands',
      params: {
        ...query,
      },
    });

    return new Result()
      .data(result['data'].map(brandBuilder))
      .meta(result['meta'])
      .build();
  }
}

export default GetBrandController;