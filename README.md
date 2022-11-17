# Lex UI demo

For use with https://aws-terraform-by-example.com/ exercises 

## Setup

### S3 site deploy
- Update the `bucket_name` in the `Makefile` with your bucket name

### Amazon Cognito

_src/main.js_

```js
// ...
const poolId = '<YOUR_POOL_ID_HERE>' // example: 'us-east-1:746dx87b-0fac-4560-bba5-47c2a3467ff6'
const region = '<REGION>' // example: us-east-1
// ...
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
