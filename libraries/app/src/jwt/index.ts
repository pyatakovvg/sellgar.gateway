
function getCookie(name: string, cookies: object) {
  try {
    if (cookies) {
      const cookie = cookies[name];
      if (cookie) {
        const normalize = JSON.parse(decodeURIComponent(cookie));

        // if ( ! ('expires_in' in normalize))    { return null; }
        // if ( ! ('token_type' in normalize))    { return null; }
        // if ( ! ('access_token' in normalize))  { return null; }
        // if ( ! ('refresh_token' in normalize)) { return null; }

        return normalize;
      }
    }
    return null;
  }
  catch(error) {
    return null;
  }
}

export { getCookie };
export { default as jwtCheckMiddleware } from './jwtCheck';
export { default as jwtRefreshMiddleware } from './jwtRefresh';
