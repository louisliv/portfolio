import React, { Component } from 'react';
import { UIView } from '@uirouter/react';

import { 
    Container,
    Col,
    Row
} from 'reactstrap';

import { connect } from 'react-redux';

import {CurrentStateSelectors} from 'store/current-state';
import TopNavbar from './navbar/navbar';

class App extends Component {
    render() {
        return (
          <div>
              {this.props.currentState.data && !this.props.currentState.data.excludeSidebar ?
                <TopNavbar/>:
                <div></div>
              }
              <UIView />
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentState: CurrentStateSelectors.get(state.currentState)
    }
}

const ConnectedComponent = connect(mapStateToProps)(App)
export default ConnectedComponent;