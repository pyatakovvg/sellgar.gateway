
import { UUID } from '@helper/utils';
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/bucket')
class UpdateBucketController extends Controller {
  async send() {
    const body = super.body;
    let customerUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! customerUuid) {
      customerUuid = UUID();
      super.cookie.set(process.env['COOKIE_BUCKET_NAME'], customerUuid);
    }

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets',
      method: 'post',
      data: {
        customerUuid,
        count: body['count'],
        bucketUuid: body['bucketUuid'],
        productUuid: body['productUuid'],
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default UpdateBucketController;
