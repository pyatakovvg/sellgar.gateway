
import request from '@package/request';
import { Controller, Route, Result } from '@library/app';


@Route('post', '/api/v1/folders')
class CreateFolderController extends Controller {
  async send() {
    const body = super.body;

    const result = await request({
      method: 'post',
      url: process.env['FILE_API_SRV'] + '/folders',
      data: body,
    });

    return new Result()
      .data(result['data'])
      .build();
  }
}

export default CreateFolderController;