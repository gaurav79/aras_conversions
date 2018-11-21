# aras-conversion
A Node.js module that returns ARAS compatible data
## Installation 
```sh
npm install aras-conversion --save
yarn add aras-conversion
bower install aras-conversion --save
```
## Usage
### Javascript
```javascript
var aras = require('aras-conversion');
var data = aras.getArasData('test data');
```
```sh
Output should be 'test data'
```
### TypeScript
```typescript
import { getArasData } from 'aras-conversion';
console.log(getArasData('test data'))
```
```sh
Output should be 'test data'
```

## Test 
```sh
npm run test
```