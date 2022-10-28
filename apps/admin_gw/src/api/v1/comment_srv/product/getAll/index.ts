
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/comments/products')
class GetCommentProductController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['COMMENT_API_SRV'] + '/products',
      params: query,
    });

    return new Result()
      .data(result['data'])
      .meta(result['meta'])
      .build();
  }
}

export default GetCommentProductController;