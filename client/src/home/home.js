import React, { Component } from 'react';

import {
    Container, 
    Row, 
    Col
} from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="main-row">
                        <Col xs="12">
                            <div>Home</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;