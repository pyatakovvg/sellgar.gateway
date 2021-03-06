
import KoaRouter from 'koa-router';
import { Context, Next } from 'koa';

import logger from './koa/logger';
import Application from './Application';


interface IOptions {
  prefix?: string;
}


async function loader(promise): Promise<new (...args: any[]) => {}> {
  return new Promise((resolve, reject) => {
    promise
      .then((result) => resolve(result['default']))
      .catch(reject);
  });
}


class Router {
  readonly router: KoaRouter;
  readonly routes: Array<any>;

  constructor(routes: Array<any>, options?: IOptions) {
    this.routes = routes;

    this.router = new KoaRouter({
      prefix: options?.['prefix'] ?? '',
    });
  }

  async create(app: Application) {
    for (let index in this.routes) {
      const route = await loader(this.routes[index]);

      if (route) {
        const controller: any = new route(app);

        logger.debug(`[${controller['method']}] ${controller['path']}`);
        this.router[controller['method']](controller['path'], async (ctx: Context, next: Next) => {

          controller.init(ctx);

          ctx.body = await controller.send(ctx, next);
        });
      }
    }

    app.server.koa.use(this.router.routes());
    app.server.koa.use(this.router.allowedMethods());

    logger.info('Router has been created');
  }
}

export default Router;
