
import request from '@package/request';
import { BadRequestError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/checkouts')
class CreateCheckoutController extends Controller {
  async send() {
    const body = super.body;
    const bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      throw new BadRequestError({ code: '22.1.111', message: 'Номер карзины не указан' });
    }

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts',
      method: 'post',
      data: {
        bucketUuid,
        ...body,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateCheckoutController;