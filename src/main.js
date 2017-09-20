// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import GXP from './GXP'
import Routes from './routes.js'
import componentTemplate from './templates/Component'
import questionTemplate from './templates/Form-question'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: Routes
});

export const bus = new Vue();

require('./assets/msm/global/global.css');
require('./assets/msm/form/style.css');

Vue.config.productionTip = false

//Global components - set before app is loaded
Vue.component('test-component', {
    template: "<p>Reusable component: {{ value }}</p>",
    props: {
        value: {
            default: 'test'
        }
    },
    data() {
        return {

        }
    }
})
Vue.component('msm-component', componentTemplate);
Vue.component('msm-question', questionTemplate);

//Global variables
export const globalCount = new Vue({
    data: {
        counter: 0
    }
})

//Vue application
var gxp = new Vue({
    el: '#GXP',
    render: h => h(GXP),
    router
})
