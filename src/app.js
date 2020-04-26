
Vue.component('project-card', {
    template: '#project-card-template',
    data () {
      return {
        count: 0
      }
    }
  })
  
  new Vue({
    el: '#app'
  })