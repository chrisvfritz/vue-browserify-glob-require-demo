import Vue from 'vue'

new Vue({
  el: 'body',
  components: require('./components/*.vue', { mode: 'list' }).map(file => {
    return { [file.name]: file.module }
  }).reduce(Object.assign)
})
