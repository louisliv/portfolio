import React from 'react';
import TerminalWrapper from '../terminal/terminal';

import {
    Container, 
    Row, 
    Col
} from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Container fluid>
                <Row className="main-row">
                    <Col xs="12">
                        <TerminalWrapper />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;