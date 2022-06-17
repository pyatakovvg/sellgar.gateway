
import { jwtCheckMiddleware, jwtRefreshMiddleware } from './jwt';

import Router from './Router';
import Application from "./Application";


interface IOptions {
  cookieName: string;
  uriRefresh: string;
  uriCheck: string;
}


class JwtProxy {
  private readonly _router: Router;
  private readonly _options: IOptions;

  constructor(router: Router, options?: IOptions) {
    this._router = router;
    this._options = options;
  }

  async create(app: Application) {

    app.server.koa.use(jwtRefreshMiddleware({
      cookieName: this._options.cookieName,
      jwksUriRefresh: this._options.uriRefresh,
    }));

    app.server.koa.use(jwtCheckMiddleware({
      cookieName: this._options.cookieName,
      jwksUriCheck: this._options.uriCheck,
    }));

    await this._router.create(app);
  }
}

export default JwtProxy;
