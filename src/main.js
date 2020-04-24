import Vue from 'vue'
import App from './App.vue'
import SvgBorder from 'svg-border-1.0.0.tgz'
Vue.use(SvgBorder)
new Vue({
  el: '#app',
  render: h => h(App)
})
