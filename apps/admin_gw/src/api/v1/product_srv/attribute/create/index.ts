
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/attributes')
class CreateAttributeController extends Controller {
  async send() {
    const body = super.body;
    const query = super.query;

    await request({
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      method: 'post',
      data: body,
    });

    const result = await request({
      url: process.env['PRODUCT_API_SRV'] + '/attributes',
      params: {
        unitUuid: query['unitUuid'],
        categoryUuid: query['categoryUuid'],
        include: ['category'],
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateAttributeController;