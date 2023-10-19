const cookie = () => {
  return {
    get(name) {
      try {
        const cookieValue = document.cookie.split(';').find(row => row.trim().startsWith(`${name}=`))
        return cookieValue ? cookieValue.split('=')[1] : undefined
      } catch (error) {
        throw new Error(`Error getting cookie: ${name}`)
      }
    },
    set(name, value, expiration = undefined) {
      if (typeof name !== 'string') {
        throw new Error('Set cookie first argument must be of type string.')
      }
      if (!value) {
        throw new Error('Set cookie must have second argument.')
      }
      if (expiration && typeof expiration !== 'number') {
        throw new Error('Set cookie third argument must be a number representing the lifetime of the cookie in seconds.')
      }
      const settings = {
        name: `${name}=${value};`,
        secure: 'Secure;',
        samesite: 'SameSite=Strict;',
        path: 'path=/;'
      }
      if (expiration) {
        settings.maxage = `max-age=${expiration};`
      }
      document.cookie = Object.values(settings).join('')
    },
    remove(name) {
      document.cookie = `${name}=;max-age=0;path=/;samesite=strict;secure`
    },
    decode(token) {
      try {
        const tokenParts = token.split('.')
        if (tokenParts.length !== 3) {
          throw new Error('Invalid JWT structure.')
        }
        return JSON.parse(atob(tokenParts[1]))
      } catch (error) {
        throw new Error(`Error decoding token. Tokens must be JWT format with a JSON payload.`)
      }
    }
  }
}

export default cookie()