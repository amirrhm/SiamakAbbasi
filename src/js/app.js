require('./bootstrap');

new Vue({
  i18n,
  router,
  created() {
    this.sayHelloWorld();
  },
  methods: {
      sayHelloWorld() {
          console.log("hello world");
      }
  },
  components: {
  },
}).$mount('#app');