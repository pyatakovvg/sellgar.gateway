
import request from "@package/request";
import { Route, Result, Controller } from '@library/app';


interface IBody {
  login: string;
  password: string;
}


@Route('post', '/api/v1/users/current/authorize')
class AuthorizeUserController extends Controller {
  private body: any;
  private cookie: any;

  async send(): Promise<any> {
    const { login, password }: IBody = this.body;

    const result = await request({
      method: 'POST',
      url: process.env['IDENTITY_API_SRV'] + '/auth/token',
      data: {
        login,
        password,
      }
    });

    console.log(result['data'])
    this.cookie.set(process.env['COOKIE_NAME'], JSON.stringify(result['data']));

    return new Result()
      .data(null)
      .build();
  }
}

export default AuthorizeUserController;