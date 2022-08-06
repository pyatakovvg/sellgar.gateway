
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/products')
class GetProductsController extends Controller {
  async send() {
    const params = {};
    const query = super.query;

    if ('brandCode' in query) {
      params['brandCode'] = (query['brandCode'] instanceof Array) ? query['brandCode'] : [query['brandCode']];
    }

    if ('groupCode' in query) {
      params['groupCode'] = query['groupCode'];
    }

    if ('categoryCode' in query) {
      params['categoryCode'] = query['categoryCode'];
    }

    if (('take' in query) && ('skip' in query)) {
      params['take'] = Number(query['take']);
      params['skip'] = Number(query['skip']);
    }

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products',
      params: {
        ...query,
        ...params,
        isUse: true,
      }
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default GetProductsController;