import Home from './Home';
import Components from './Components.vue';
import text from './pages/text';
import buttons from './pages/buttons';
import radios from './pages/radios';
import textFields from './pages/text-fields';
import checks from './pages/checkboxes';
import dropdown from './pages/dropdown';
import spinner from './pages/spinner';
import notifications from './pages/notifications';
import stepIndicator from './pages/step-indicator';

export default [
    { path: '/', component: Home },
    { path: '/components', component: Components },
    { path: '/components/atoms/text', component: text },
    { path: '/components/atoms/buttons', component: buttons },
    { path: '/components/atoms/radio-buttons', component: radios },
    { path: '/components/atoms/text-field', component: textFields },
    { path: '/components/atoms/checkboxes', component: checks },
    { path: '/components/atoms/dropdown', component: dropdown },
    { path: '/components/atoms/spinner', component: spinner },
    { path: '/components/atoms/notifications', component: notifications },
    { path: '/components/atoms/step-indicator', component: stepIndicator }
]
