import Vue from 'vue'
import createRouter from './router'
import createStore from './store'
import App from './App.vue'

Vue.mixin({
  beforeCreate() {
    const asyncData = this.$options.asyncData
    // asyncData({ router,  })
  }
})

export default function createApp() {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}