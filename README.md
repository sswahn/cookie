# Cookie
A JavaScript utility for efficiently managing browser cookies.

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

To set a cookie, (with optional expiration argument - a numeric value representing seconds):  

```javascript
cookie.set('name', value, expiration)
```

### Remove A Cookie  

To remove a cookie:  

```javascript
cookie.remove('name')
```

## Licence
Server is [MIT Licensed](https://github.com/sswahn/server/blob/main/LICENSE)
