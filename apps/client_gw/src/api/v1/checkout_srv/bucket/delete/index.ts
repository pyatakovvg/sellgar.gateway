
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('delete', '/api/v1/bucket')
class DeleteBucketController extends Controller {
  async send() {
    let bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      return new Result()
        .data(null)
        .build();
    }

    await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets/' + bucketUuid,
      method: 'delete',
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default DeleteBucketController;
