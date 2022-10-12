
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/products/:uuid/comments')
class GetCommentsController extends Controller {
  async send() {
    const params = super.params;
    const query = super.query;

    if (('take' in query) && ('skip' in query)) {
      params['take'] = Number(query['take']);
      params['skip'] = Number(query['skip']);
    }

    const result = await request({
      url: process.env['COMMENT_API_SRV'] + '/products',
      params: {
        uuid: params['uuid'],
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