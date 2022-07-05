
import request from '@package/request';
import { NotFoundError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';

import productBuilder from './builder/product';


@Route('get', '/api/v1/products/:externalId')
class GetProductsController extends Controller {
  async send() {
    const { externalId } = super.params;

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/products',
      params: {
        externalId: externalId,
        isUse: true,
      }
    });

    if ( ! result['data'].length) {
      throw new NotFoundError({ code: '10.7.8', message: `Товар "${externalId}" не найден` });
    }

    const comments = await request({
      url: process.env['COMMENT_API_SRV'] + '/comments',
      params: {
        productUuid: result['data'][0]['uuid'],
      }
    });

    return new Result()
      .data({
        product: productBuilder(result['data'][0]),
        comments: { data: comments['data'], meta: comments['meta'] },
      })
      .build();
  }
}

export default GetProductsController;