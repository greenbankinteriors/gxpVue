import Home from './Home';
import buttons from './pages/buttons';
import radios from './pages/radios';
import inputs from './pages/inputs';
import checks from './pages/checkboxes';
import dropdown from './pages/dropdown';
import notifications from './pages/notifications';
import stepIndicator from './pages/step-indicator';

export default [
    { path: '/', component: Home },
    { path: '/components/buttons', component: buttons },
    { path: '/components/radio-buttons', component: radios },
    { path: '/components/inputs', component: inputs },
    { path: '/components/checkboxes', component: checks },
    { path: '/components/dropdown', component: dropdown },
    { path: '/components/notifications', component: notifications },
    { path: '/components/step-indicator', component: stepIndicator }
]
