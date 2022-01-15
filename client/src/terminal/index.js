import TerminalWrapper from './terminal';

const terminalState = {
    name: 'terminal',
    url: '/terminal',
    component: TerminalWrapper,
    data: {
        excludeSidebar: true
    },
}

export default terminalState;