import Home from './Home';
import buttons from './pages/buttons';
import inputs from './pages/inputs';
import Test from './components/test';
import Users from './components/users';

export default [
    { path: '/components', component: Home },
    { path: '/components/buttons', component: buttons },
    { path: '/components/inputs', component: inputs },
    { path: '/test', component: Test }
]
