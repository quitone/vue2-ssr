import { createApp } from './app'

const { app, router, store } = createApp()

if (!window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady((to, from, cb) => {
  const matched = router.getMatchedComponents(to)
  const prevMatched = router.getMatchedComponents(from)
  
}, (err) => {
  console.log(err, '路由报错')
})