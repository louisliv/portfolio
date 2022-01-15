import React from 'react';

import Terminal from 'terminal-in-react';
import { router } from 'router';

const TerminalWrapper = () => {
    const routeHome = () => {
        router.stateService.go('home')
    }

    return (
        <div>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontSize: "1.25em", width: "100%", minHeight: "630px"}}
                showActions={false}
                startState="maximised"
                hideTopBar={true}
                commands={{
                    'about-louis': () => 'Hello',
                    'home': () => routeHome()
                }}
                descriptions={{
                    'about-louis': 'prints what I\'m all about.',
                    'home': 'Navigate to my home page.'
                }}
                msg='Welcome to the interactive version of my site! Type "help" for a list of commands.'/>
        </div>
    );
}

export default TerminalWrapper;