
import { UUID } from '@helper/utils';
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/checkouts')
class AddToCheckoutController extends Controller {
  async send() {
    const body = super.body;
    let bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      bucketUuid = UUID();
      console.log(bucketUuid)
      super.cookie.set(process.env['COOKIE_BUCKET_NAME'], bucketUuid);
    }

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/checkouts/' + bucketUuid,
      method: 'post',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default AddToCheckoutController;