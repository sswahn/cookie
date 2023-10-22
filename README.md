# Cookie
A JavaScript utility for efficiently managing browser cookies.

## Usage  

Import library.  

```javascript
import cookie from '@sswahn/cookie'
```

### Get Cookie  

Retrieve a cookie by name.  

```javascript
const token = cookie.get('name')
```

### Set Cookie  

Set a cookie, with optional expiration argument (a numeric value representing the lifetime of the cookie in seconds).  

```javascript
cookie.set('name', value, expiration)
```

### Remove Cookie  

Remove a cookie.  

```javascript
cookie.remove('name')
```

## License
Cookie is [MIT Licensed](https://github.com/sswahn/cookie/blob/main/LICENSE)
