
import { UnauthorizedError } from '@package/errors';

import { ExtendableContext, Next } from 'koa';

import jwt from "koa-jwt";

import logger from '../koa/logger';
import { getCookie } from './index';
import request from "@package/request";


interface IOptions {
  cookieName: string;
  jwksUriCheck: string;
}


function middleware(options: IOptions) {
  return async function(ctx: ExtendableContext, next: Next) {
    logger.debug('JwtCheck: Проверка авторизационного токена');

    const cookie = getCookie(options['cookieName'], ctx['cookie']);

    if ( ! cookie) {
      logger.debug('JwtCheck: Авторизационная cookie не найдена');
      throw new UnauthorizedError({ code: '60.1.216', message: 'Пользователь неавторизован' });
    }

    logger.info('JwtCheck: Checking token');

    await jwt({
      cookie: options['cookieName'],
      getToken: () => {
        if (cookie['access_token']) {
          return cookie['access_token'];
        }
        return null;
      },
      secret: async () => {
        const result = await request({
          url: options['jwksUriCheck'],
        });
        return result['data'];
      },
      audience: null,
      issuer: null,
      algorithms: ['HS384']
    })(<any> ctx, next);

    logger.info('JwtCheck: Checking cookies success');
  }
}

export default middleware;