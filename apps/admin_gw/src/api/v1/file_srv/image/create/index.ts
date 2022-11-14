
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import { PassThrough } from 'stream';


@Route('post', '/api/v1/images')
class CurrentUserController extends Controller {
  async send() {
    const query = super.query;
    const req = super.ctx['req'];

    const tunnel = new PassThrough();

    req.pipe(tunnel);

    const result = await request({
      method: 'post',
      url: process.env['FILE_API_SRV'] + '/images',
      headers: {
        'content-type': req['headers']['content-type'],
      },
      data: tunnel,
      params: {
        ...query,
      }
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CurrentUserController;