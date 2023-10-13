import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

type CustomFetchOptions<T> = UseFetchOptions<T> & {
  excludeInterceptor?: number[]
}

export async function useApi<T>(url: string, opts: CustomFetchOptions<T> = {}) {
  const { excludeInterceptor, ...options } = opts

  const defaults: UseFetchOptions<T> = {
    onRequest({ options }) {
      const { csrf } = useCsrf()

      options.headers = new Headers(options.headers)
      options.headers.set('X-Requested-With', 'XMLHttpRequest')
      options.headers.set('csrf-token', csrf)
    },

    async onResponseError({ response }) {
      const excludedInterceptor = (statusCode: number): boolean => {
        if (!excludeInterceptor)
          return false

        return excludeInterceptor.includes(statusCode)
      }

      const toast = useToast()

      if (!excludedInterceptor(response.status)) {
        if (response.status === 401) {
          toast.add({
            color: 'critical',
            title: 'Session Expired',
            description: 'Your session has expired, please log in.',
          })

          if (typeof window !== 'undefined')
            window.location.reload()
        }

        if (response.status === 403) {
          toast.add({
            color: 'critical',
            title: 'Access Forbiden',
            description: 'Your Account is not permitted to request to some endpoints.',
          })
        }

        if (response.status >= 500) {
          toast.add({
            color: 'critical',
            title: 'Error',
            description: 'We\'re sorry but we\'re having some technical difficulties. please try again later.',
          })
        }
      }
    },
  }

  const params = defu(options, defaults)

  return await useFetch(url, params)
}
