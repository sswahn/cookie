const cookie = {
  get(name) {
    if (typeof name !== 'string') {
      throw new Error('Get cookie first argument must be of type string.')
    }
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
      const [cookieName, ...cookieValueParts] = cookie.trim().split('=')
      const cookieValue = cookieValueParts.join('=')
      if (cookieName === name) {
        return cookieValue
      }
    }
    return undefined 
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
    if (typeof name !== 'string') {
      throw new Error('Remove cookie argument must be of type string.')
    }
    document.cookie = `${name}=;max-age=0;path=/;samesite=strict;secure`
  }
}

export default cookie
