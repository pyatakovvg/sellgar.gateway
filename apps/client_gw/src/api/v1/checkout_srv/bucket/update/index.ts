
import request from '@package/request';
import { InternalServerError } from '@package/errors';
import { Controller, Route, Result } from '@library/app';


@Route('put', '/api/v1/bucket')
class UpdateBucketController extends Controller {
  async send() {
    const body = super.body;
    let bucketUuid = super.cookie.get(process.env['COOKIE_BUCKET_NAME']);

    if ( ! bucketUuid) {
      throw new InternalServerError({ code: '10.0.4', message: 'Нет карзины чтобы в ней обновить товар' });
    }

    await request({
      url: process.env['CHECKOUT_API_SRV'] + '/buckets/' + bucketUuid,
      method: 'put',
      data: {
        uuid: body['uuid'],
        count: body['count'],
      },
    });

    return new Result()
      .data(null)
      .build();
  }
}

export default UpdateBucketController;
