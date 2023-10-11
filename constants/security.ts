import type { NuxtConfig } from 'nuxt/schema'

// eslint-disable-next-line node/prefer-global/process
const IS_DEV = process.env.NODE_ENV === 'development'

export const SECURITY_CONFIG = <NuxtConfig['security']>{
  enabled: true,
  csrf: true,
  rateLimiter: false,
  headers: {
    contentSecurityPolicy: {
      'base-uri': ['\'self\''],
      'font-src': ['\'self\'', 'fonts.gstatic.com'],
      'form-action': ['\'self\''],
      'frame-ancestors': ['\'self\'', 'https:'],
      'img-src': ['\'self\'', 'data:'],
      'object-src': ['\'none\''],
      'script-src-attr': ['\'none\''],
      'style-src': ['\'self\'', 'fonts.googleapis.com', '\'unsafe-inline\''],
      'connect-src': [
        '\'self\'',
        IS_DEV ? 'ws:' : undefined,
        IS_DEV ? 'localhost:*' : undefined,
      ],
      'upgrade-insecure-requests': !IS_DEV,
    },
    crossOriginEmbedderPolicy: IS_DEV ? 'unsafe-none' : 'require-corp',
  },
}

export const CSRF_CONFIG = <NuxtConfig['csurf']>{
  cookie: {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  },
  methodsToProtect: ['POST', 'PUT', 'PATCH', 'GET', 'DELETE'],
  excludedUrls: [['^/(?!api/v1).*', 'i']],
}
