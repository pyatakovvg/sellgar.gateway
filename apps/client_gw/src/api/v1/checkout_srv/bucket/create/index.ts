
import { UUID } from '@helper/utils';
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/bucket')
class UpdateBucketController extends Controller {
  async send() {
    const body = super.body;
    let bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      bucketUuid = UUID();
      super.cookie.set(process.env['COOKIE_BUCKET_NAME'], bucketUuid);
    }

    await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets',
      method: 'post',
      data: {
        bucketUuid,
        uuid: body['uuid'],
        count: body['count'],
        productUuid: body['productUuid'],
      },
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default UpdateBucketController;
