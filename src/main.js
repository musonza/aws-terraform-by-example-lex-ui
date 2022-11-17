// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { Store as LexWebUiStore, Plugin as LexWebUi } from 'aws-lex-web-ui'
import Vuetify from 'vuetify'
import { Config as AWSConfig, CognitoIdentityCredentials }
  from 'aws-sdk/global'
import LexRuntime from 'aws-sdk/clients/lexruntime'
import Polly from 'aws-sdk/clients/polly'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuex)

const store = new Vuex.Store(LexWebUiStore)

const poolId = 'us-east-1:ab485626-1769-49d8-8b26-3da678794541'
const region = 'us-east-1'
const credentials = new CognitoIdentityCredentials(
  { IdentityPoolId: poolId },
  { region }
)
const awsConfig = new AWSConfig({ region, credentials })
const lexRuntimeClient = new LexRuntime(awsConfig)
const pollyClient = new Polly(awsConfig)

console.log(process.env)

// see the configuration section for details about the config fields
const config = {
  cognito: {
    poolId
  },
  lex: {
    botName: 'Classifieds',
    initialText: 'You can ask me for help adding posts. Just type "create post", "delete", "update", etc'
  },
  ui: {
    toolbarLogo: '',
    toolbarTitle: 'Classifieds Bot',
    pageTitle: 'Classifieds Bot'
  }
}

Vue.use(LexWebUi, { config, awsConfig, lexRuntimeClient, pollyClient })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  store,
  components: { App },
  template: '<App/>'
})
