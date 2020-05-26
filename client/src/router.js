// import dashboardState from 'dashboard';
// import { chatRoom, chatRoomChat } from './chat-room'
// import { auth, login } from './auth';
import homeState from 'home';
import terminalState from 'terminal';
import { UIRouterReact, servicesPlugin, pushStateLocationPlugin } from '@uirouter/react';
import App from './App';
import {CurrentStateActions} from './store/current-state';

export const router = new UIRouterReact();

router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

router.transitionService.onSuccess(true, function(trans) {
    CurrentStateActions.set(trans.router.globals.current);
});

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