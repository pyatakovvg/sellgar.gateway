
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import catalogBuilder from "./builder/catalog";


@Route('get', '/api/v1/products/:uuid/copy')
class CopyProductsController extends Controller {
  async send() {
    const params = super.params;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products/' + params['uuid'] + '/copy',
    });

    return new Result()
      .data(catalogBuilder(result['data']))
      .build();
  }
}

export default CopyProductsController;