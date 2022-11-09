
import request from '@package/request';
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

    return new Result()
      .data(result['data']?.[0] ?? null)
      .build();
  }
}

export default GetProductsController;