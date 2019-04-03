import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';

class Dashboard extends Component {
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
                                    <h2>Dashboard</h2>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>Future conents comes here.</CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
