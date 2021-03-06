// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import store from './store'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
    primary: 'cyan',
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    store: store,
    components: {
        App
    }
})
