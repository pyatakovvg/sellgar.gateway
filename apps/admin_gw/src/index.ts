
import { Application, Config, Router, JwtProxy } from '@library/app';

import publicRoutes from './config/routes/public';
import protectedRoutes from './config/routes/protected';


(async () => {
  try {
    const app = new Application(new Config({
      port: Number(process.env['PORT']),
      origin: process.env['ORIGIN'],
    }));


    app.addRouter(new Router(publicRoutes));
    // app.addRouter(new JwtProxy(new Router(protectedRoutes), {
    //   cookieName: process.env['COOKIE_NAME'],
    //   uriCheck: process.env['IDENTITY_API_SRV'] + '/.well-known',
    //   uriRefresh: process.env['IDENTITY_API_SRV'] + '/token/refresh',
    // }));

    await app.start();
  }
  catch(e) {

    console.error(e);
    process.exit(0);
  }
})();
