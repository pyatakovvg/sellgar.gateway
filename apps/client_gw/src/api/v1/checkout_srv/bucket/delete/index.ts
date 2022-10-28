
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('delete', '/api/v1/bucket')
class DeleteBucketController extends Controller {
  async send() {
    const query = super.query;
    const customerUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! customerUuid) {
      return new Result()
        .data(null)
        .build();
    }

    const result = await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets',
      method: 'delete',
      params: {
        ...query,
        customerUuid,
      },
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default DeleteBucketController;
