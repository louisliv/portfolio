import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './custom.scss';
import * as serviceWorker from './serviceWorker';

import { router } from 'router';
import { UIRouter, UIView } from '@uirouter/react';

ReactDOM.render(
    <UIRouter router={router}>
        <UIView />
    </UIRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
