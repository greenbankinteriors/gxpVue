import Home from './Home';
import Components from './Components.vue';
import text from './pages/atoms/text';
import buttons from './pages/atoms/buttons';
import radios from './pages/atoms/radios';
import textFields from './pages/atoms/text-fields';
import checks from './pages/atoms/checkboxes';
import dropdown from './pages/atoms/dropdown';
import spinner from './pages/atoms/spinner';
import notifications from './pages/atoms/notifications';
import formField from './pages/organisms/form-field';

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

    { path: '/components/organisms/form-field', component: formField }
]
