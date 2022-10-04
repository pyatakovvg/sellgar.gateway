
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import groupBuilder from './builders/group';


@Route('get', '/api/v1/groups')
class GetGroupsController extends Controller {
  async send() {
    const query = super.query;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/groups',
      params: query,
    });

    return new Result()
      .data(result['data'].map(groupBuilder))
      .meta(result['meta'])
      .build();
  }
}

export default GetGroupsController;