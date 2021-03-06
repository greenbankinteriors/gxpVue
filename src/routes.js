import Home from './Home';
import atoms from './pages/gxp/atoms.vue';
import molecules from './pages/gxp/molecules.vue';
import organisms from './pages/gxp/organisms.vue';
import pages from './pages/gxp/pages.vue';

import text from './pages/atoms/text';
import buttons from './pages/atoms/buttons';
import radios from './pages/atoms/radios';
import textFields from './pages/atoms/text-fields';
import checks from './pages/atoms/checkboxes';
import dropdown from './pages/atoms/dropdown';
import spinner from './pages/atoms/spinner';
import scrollSel from './pages/atoms/scrollable-selector';

import question from './pages/molecules/question';
import help from './pages/molecules/help';
import answer from './pages/molecules/answer';
import notifications from './pages/molecules/notifications';
import progressStep from './pages/molecules/progress-steps';
import autosuggest from './pages/molecules/autosuggest';
import ansReplay from './pages/molecules/answer-replay';

import formSection from './pages/organisms/form-section';
import formField from './pages/organisms/form-field';
import progressIndicator from './pages/organisms/progress-indicator';
import contentTab from './pages/organisms/content-tab';

import questionSet from './pages/pages/question-set';

export default [
    { path: '/', component: Home },
    { path: '/components/', component: atoms },
    { path: '/components/atoms', component: atoms },
    { path: '/components/molecules', component: molecules },
    { path: '/components/organisms', component: organisms },
    { path: '/components/pages', component: pages },

    { path: '/components/atoms/text', component: text },
    { path: '/components/atoms/buttons', component: buttons },
    { path: '/components/atoms/radio-buttons', component: radios },
    { path: '/components/atoms/text-field', component: textFields },
    { path: '/components/atoms/checkboxes', component: checks },
    { path: '/components/atoms/dropdown', component: dropdown },
    { path: '/components/atoms/spinner', component: spinner },
    { path: '/components/atoms/scrollable-selectors', component: scrollSel },

    { path: '/components/molecules/question', component: question },
    { path: '/components/molecules/help', component: help },
    { path: '/components/molecules/answer', component: answer },
    { path: '/components/molecules/notifications', component: notifications },
    { path: '/components/molecules/progress-steps', component: progressStep },
    { path: '/components/molecules/autosuggest', component: autosuggest },
    { path: '/components/molecules/answer-replay', component: ansReplay },

    { path: '/components/organisms/form-section', component: formSection },
    { path: '/components/organisms/form-field', component: formField },
    { path: '/components/organisms/progress-indicator', component: progressIndicator },
    { path: '/components/organisms/content-tab', component: contentTab },

    { path: '/components/pages/question-set', component: questionSet }
]
