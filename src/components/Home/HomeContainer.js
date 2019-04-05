import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';

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
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h2>Home</h2>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>Welcome .....</CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomeContainer;
