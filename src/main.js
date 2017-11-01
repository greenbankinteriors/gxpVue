// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import GXP from './GXP'
import Routes from './routes'
import GlobalFuncs from './mixins/global'
import gxpPageTemplate from './templates/gxp/Page'
import gxpCompTemplate from './templates/gxp/Component'
import questionTemplate from './templates/msm/Form-question'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: Routes
});

Vue.mixin(GlobalFuncs)

export const bus = new Vue();

require('./assets/msm/global/global.css');
require('./assets/gxp/css/prism.css');
require('./assets/gxp/js/prism.js');
//require('./assets/msm/form/style.css');

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
Vue.component('gxp-page', gxpPageTemplate);
Vue.component('gxp-component', gxpCompTemplate);
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
