
import logger from '@package/logger';
import request from '@package/request';

import { ExtendableContext, Next } from 'koa';
import { UnauthorizedError } from '@package/errors';


import { getCookie } from './index';


interface IOptions {
  cookieName: string;
  jwksUriRefresh: string;
}


function middleware(options: IOptions) {
  return async function(ctx: ExtendableContext, next: Next) {
    logger.debug('JwtRefresh: Обновление авторизационного токена');

    try {
      const cookie = getCookie(options['cookieName'], ctx['cookie']);

      if ( ! cookie) {
        logger.debug('JwtRefresh: Авторизационная cookie не найдена');
        throw new UnauthorizedError({ code: '60.1.216', message: 'Пользователь неавторизован' });
      }

      const dateNow = Date.now();

      if (dateNow > cookie['expires_in']) {
        logger.debug('JwtRefresh: Refresh jwt-token');

        const result = await request({
          url: options['jwksUriRefresh'],
          method: 'post',
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            grant_type: 'refresh_token',
            client_id: 'sellgar_admin',
            refresh_token: cookie['refresh_token'],
          },
        });

        const newCookie = encodeURIComponent(JSON.stringify(result['data']));

        ctx.cookies.set(options['cookieName'], newCookie, {
          httpOnly: true,
        });

        ctx['cookie'][options['cookieName']] = newCookie;

        logger.debug('JwtRefresh: Refresh jwt-token - авторизационный токен обновлен');
      }

      return await next();
    }
    catch (error) {
      if ('originalError' in error) {
        throw new UnauthorizedError({ code: '3.1.0', message: error['originalError']['message'] });
      }
      throw error;
    }
  }
}

export default middleware;
