# Cookie
A JavaScript utility for efficiently managing browser cookies and decoding JWTs (JSON Web Tokens).

## Usage  

Import library 
```javascript
import cookie from '@sswahn/cookie'
```

### Get Cookie  

To retrieve a cookie by name:  

```javascript
const token = cookie.get('name')
```

### Set Cookie  

To set a cookie:  

```javascript
cookie.set('name', value, expiration)
```

### Remove A Cookie  

To remove a cookie:  

```javascript
cookie.remove('name')
```

### Decode Token  

To decode a JWT:  

```javascript
const payload = cookie.decode(token)
```
**Note:** The decode method is for data extraction and does not verify the JWT's signature. Always verify JWTs in a secure environment if used for authentication or security contexts.

## Licence
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)
