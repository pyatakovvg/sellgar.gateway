
import { Context } from 'koa';

import Plugin from './Plugin';
import Application from './Application';


class Controller {
  protected _ctx: Context;
  protected _body: any;
  protected _headers: any;
  protected _cookie: any;
  protected _params: any;
  protected _query: any;
  protected readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  init(ctx: Context) {
    this._ctx = ctx;
    this._body = ctx['request']['body'];
    this._headers = ctx['headers'];
    this._cookie = ctx['cookies'];
    this._params = ctx['params'];
    this._query = ctx['request']['query'];
  }

  get plugin() {
    const app = this.app;
    return {
      get(name: string): Plugin {
        return app.plugins[name];
      }
    };
  }

  get ctx(): Context {
    return this._ctx;
  }

  get body(): any {
    return this._body;
  }

  get headers(): any {
    return this._headers;
  }

  get cookie(): any {
    return this._cookie;
  }

  get params(): any {
    return this._params;
  }

  get query(): any {
    return this._query;
  }

  async send(): Promise<any> {
    throw new Error('Method "send" mast be reloaded in controller');
  }
}

export default Controller;
