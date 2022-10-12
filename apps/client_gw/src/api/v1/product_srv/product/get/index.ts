
import request from '@package/request';
import { NotFoundError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';


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
console.log(result['data'][0])
    if ( ! result['data'].length) {
      throw new NotFoundError({ code: '10.7.8', message: `Товар "${externalId}" не найден` });
    }

    return new Result()
      .data(result['data'][0])
      .build();
  }
}

export default GetProductsController;