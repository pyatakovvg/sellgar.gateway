
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('get', '/api/v1/bucket')
class GetBucketController extends Controller {
  async send() {
    let customerUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! customerUuid) {
      return new Result()
        .data(null)
        .build();
    }

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets',
      method: 'get',
      params: {
        customerUuid,
      },
    });

    if ( ! result['data']?.[0]) {
      return new Result()
        .data(null)
        .build();
    }

    return new Result()
      .data(result['data'][0])
      .build();
  }
}

export default GetBucketController;
