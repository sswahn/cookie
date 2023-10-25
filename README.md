# Cookie
A lightweight, easy-to-use utility for efficiently managing cookies in a web browser.  

## Features
- **Get Cookie**: Retrieve the value of a cookie.
- **Set Cookie**: Set a cookie with optional attributes.
- **Remove Cookie**: Easily delete a cookie.  

## Installation
Using npm.
```bash
npm install @sswahn/cookie
```

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
