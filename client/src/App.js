import React from 'react';

import TopNavbar from './navbar/navbar';

import { UIView, useCurrentStateAndParams } from '@uirouter/react'

const App = (props) => {
    // eslint-disable-next-line
    const { state, params } = useCurrentStateAndParams();

    return (
        <div>
            {state.data && !state.data.excludeSidebar ?
                <TopNavbar/>:
                <></>
            }
            <UIView />
        </div>
    );
}

export default App;
