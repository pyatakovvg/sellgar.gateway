
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/products/:productUuid/comments')
class GetCommentsController extends Controller {
  async send() {
    const params = super.params;
    const query = super.query;

    if (('take' in query) && ('skip' in query)) {
      params['take'] = Number(query['take']);
      params['skip'] = Number(query['skip']);
    }

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/comments',
      params: {
        ...query,
        ...params,
      }
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default GetCommentsController;