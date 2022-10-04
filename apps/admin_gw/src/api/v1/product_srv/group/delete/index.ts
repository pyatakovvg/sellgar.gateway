
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import brandBuilder from './builders/brand';


@Route('delete', '/api/v1/groups')
class DeleteGroupController extends Controller {
  async send() {
    const query = super.query;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/groups',
      method: 'delete',
      params: {
        uuid: query['uuid'],
      },
    });

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/groups',
    });

    return new Result()
      .data(result['data'].map(brandBuilder))
      .meta(result['meta'])
      .build();
  }
}

export default DeleteGroupController;
