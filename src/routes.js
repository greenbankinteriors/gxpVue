import Home from './Home';
import atoms from './pages/gxp/atoms.vue';
import molecules from './pages/gxp/molecules.vue';
import organisms from './pages/gxp/organisms.vue';

import text from './pages/atoms/text';
import buttons from './pages/atoms/buttons';
import radios from './pages/atoms/radios';
import textFields from './pages/atoms/text-fields';
import checks from './pages/atoms/checkboxes';
import dropdown from './pages/atoms/dropdown';
import spinner from './pages/atoms/spinner';

import question from './pages/molecules/question';
import help from './pages/molecules/help';
import answer from './pages/molecules/answer';
import notifications from './pages/molecules/notifications';

import formField from './pages/organisms/form-field';
import progressIndicator from './pages/organisms/progress-indicator';

export default [
    { path: '/', component: Home },
    { path: '/components/atoms', component: atoms },
    { path: '/components/molecules', component: molecules },
    { path: '/components/organisms', component: organisms },

    { path: '/components/atoms/text', component: text },
    { path: '/components/atoms/buttons', component: buttons },
    { path: '/components/atoms/radio-buttons', component: radios },
    { path: '/components/atoms/text-field', component: textFields },
    { path: '/components/atoms/checkboxes', component: checks },
    { path: '/components/atoms/dropdown', component: dropdown },
    { path: '/components/atoms/spinner', component: spinner },

    { path: '/components/molecules/question', component: question },
    { path: '/components/molecules/help', component: help },
    { path: '/components/molecules/answer', component: answer },
    { path: '/components/molecules/notifications', component: notifications },

    { path: '/components/organisms/form-field', component: formField },
    { path: '/components/organisms/progress-indicator', component: progressIndicator }
]
