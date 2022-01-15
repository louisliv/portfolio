// import dashboardState from 'dashboard';
// import { chatRoom, chatRoomChat } from './chat-room'
// import { auth, login } from './auth';
import homeState from 'home';
import terminalState from 'terminal';
import { UIRouterReact, servicesPlugin, pushStateLocationPlugin } from '@uirouter/react';
import App from './App';

export const router = new UIRouterReact();

router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

const app = {
    name: 'app',
    redirectTo: 'welcome',
    component: App,
    data: {
        excludeSidebar: false
    },
};

const routes = [
    app,
    homeState,
    terminalState
]

routes.forEach(route => router.stateRegistry.register(route));