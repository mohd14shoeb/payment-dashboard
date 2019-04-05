import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { WelcomeWidget } from './WelcomeWidget';

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <WelcomeWidget />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeContainer;
