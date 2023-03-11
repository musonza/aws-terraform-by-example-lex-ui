# Lex UI demo

For use with https://aws-terraform-by-example.com/ exercises 

## Setup

### S3 site deploy (optional)

- Update the `bucket_name` in the `Makefile` with your bucket name

### Environment variables

copy the example env file by running the following command in the root directory

`cp config/example.env.js config/env.js`

Add your env variables

_config/env.js_

Example
```js
// ...
  AWS_REGION: '"us-east-1"',
  POOLID: '"us-east-1:746dx87b-0fac-4560-bba5-47c2a3467ff6"',
  BOT_NAME: '"Classifieds"',
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
