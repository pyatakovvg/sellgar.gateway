
import { ExtendableContext, Next } from 'koa';


const defaultOptions = {
  allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowedOrigins: [],
};


function middleware(options) {
  return async function(ctx: ExtendableContext, next: Next) {
    options = {
      ...defaultOptions,
      ...options,
    };

    ctx.vary('Origin');

    let origin;
    if (typeof options['origin'] === 'function') {
      origin = options.origin(ctx);
    } else {
      origin = options['origin'] || ctx.get('Origin') || '*';
    }

    if ( ! origin) {
      return next();
    }

    if(options['allowedOrigins'].indexOf(origin) > -1) {
      ctx.set('Access-Control-Allow-Origin', origin);
    }

    if (ctx.method === 'OPTIONS') {
      if ( ! ctx.get('Access-Control-Request-Method')) {
        return next();
      }

      if (options['maxAge']) {
        ctx.set('Access-Control-Max-Age', String(options['maxAge']));
      }

      if (options['credentials'] === true) {
        ctx.set('Access-Control-Allow-Credentials', 'true');
      }

      if (options['allowMethods']) {
        ctx.set('Access-Control-Allow-Methods', options['allowMethods'].join(','));
      }

      if (options['allowHeaders']) {
        ctx.set('Access-Control-Allow-Headers', options['allowHeaders'].join(','));
      }
      else {
        ctx.set('Access-Control-Allow-Headers', ctx.get('Access-Control-Request-Headers'));
      }

      ctx.status = 204;
    }
    else {

      if (options['credentials'] === true) {
        ctx.set('Access-Control-Allow-Credentials', 'true');
      }

      if (options['exposeHeaders']) {
        ctx.set('Access-Control-Expose-Headers', options['exposeHeaders'].join(','));
      }

      return next();
    }
  }
}

export default middleware;
