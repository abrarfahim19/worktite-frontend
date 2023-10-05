import Cookies, {
  Cookie,
  CookieGetOptions,
  CookieSetOptions,
} from 'universal-cookie';
import {frontendLinks} from '../common/app-link';

export const OIDC_LOGIN_STATUS_COOKIE = 'oidc:login:status';
export const OIDC_REDIRECT_URL_SESSION_KEY = 'oidc:login:redirect_URL';

const cookieInstance = new Cookies();

export const browserCookie = {
  getAll(options?: CookieGetOptions) {
    return cookieInstance.getAll(options);
  },
  get(key: string, options?: CookieGetOptions) {
    return cookieInstance.get(key, options);
  },
  set(key: string, value: Cookie, options?: CookieSetOptions) {
    const defaultOptions: CookieSetOptions = {
      path: '/',
      domain: frontendLinks.UTILS.COOKIE_DOMAIN,
    };

    return cookieInstance.set(
      key,
      value,
      typeof options !== 'undefined'
        ? {...defaultOptions, ...options}
        : defaultOptions,
    );
  },
  remove(key: string, options?: CookieSetOptions) {
    const defaultOptions: CookieSetOptions = {
      path: '/',
      domain: frontendLinks.UTILS.COOKIE_DOMAIN,
    };

    return cookieInstance.remove(
      key,
      typeof options !== 'undefined'
        ? {...defaultOptions, ...options}
        : defaultOptions,
    );
  },
};

export const browserSession = {
  get(key: string) {
    return sessionStorage.getItem(key);
  },
  set(key: string, value: string) {
    return sessionStorage.setItem(key, value);
  },
  remove(key: string) {
    return sessionStorage.removeItem(key);
  },
};
