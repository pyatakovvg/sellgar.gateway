
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/checkouts')
class GetCheckoutController extends Controller {
  async send() {
    let bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      return new Result()
        .data(null)
        .build();
    }
    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts/' + bucketUuid,
      method: 'get',
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default GetCheckoutController;