import React, { Component } from 'react';

import Terminal from 'terminal-in-react';
import { router } from 'router';

class TerminalRoute extends Component {
    render() {
        return (
            <div>
                <Terminal
                    color='green'
                    backgroundColor='black'
                    barColor='black'
                    style={{ fontSize: "1.25em", height: "100vh"}}
                    showActions={false}
                    startState="maximised"
                    hideTopBar={true}
                    commands={{
                        'about-louis': () => 'Hello',
                        showmsg: this.showMsg,
                        'home': () => router.stateService.go('home')
                    }}
                    descriptions={{
                        'about-louis': 'prints what I\'m all about.',
                        showmsg: 'shows a message',
                        'home': 'Navigate to my home page.'
                    }}
                    msg='Welcome to the interactive version of my site! Type "help" for a list of commands.'/>
            </div>
        );
    }
}

export default TerminalRoute;