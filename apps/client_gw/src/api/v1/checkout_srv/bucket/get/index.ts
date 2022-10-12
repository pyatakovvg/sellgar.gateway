
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';

import bucketBuilder from './builders/bucket';


@Route('get', '/api/v1/bucket')
class GetBucketController extends Controller {
  async send() {
    let bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      return new Result()
        .data(null)
        .build();
    }

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets',
      method: 'get',
      params: {
        uuid: bucketUuid,
      },
    });

    if ( ! result['data']?.[0]) {
      return new Result()
        .data(null)
        .build();
    }

    return new Result()
      .data(bucketBuilder(result['data'][0]))
      .build();
  }
}

export default GetBucketController;
