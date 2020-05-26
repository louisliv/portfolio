import TerminalRoute from './terminal';

const terminalState = {
    name: 'terminal',
    url: '/terminal',
    component: TerminalRoute,
    data: {
        excludeSidebar: true
    },
}

export default terminalState;