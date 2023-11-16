# Cookie · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/cookie/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/cookie) ![Weekly Downloads](https://img.shields.io/npm/dw/@sswahn/cookie)
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

## Related
- [@sswahn/storage](https://www.npmjs.com/package/@sswahn/storage): A robust and easy-to-use utility for interacting with Web Storage API.
- [@sswahn/database](https://www.npmjs.com/package/@sswahn/database): Easily interact with the IndexedDB API with a simplified, promise-based approach.
- [@sswahn/cache](https://www.npmjs.com/package/@sswahn/cache): A robust caching utility that provides easy-to-use methods for interacting with the browser's Cache API.

## License
Cookie is [MIT Licensed](https://github.com/sswahn/cookie/blob/main/LICENSE)
