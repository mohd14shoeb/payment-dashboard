import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';

class UserContainer extends Component {
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
                                    <h2>Users</h2>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>Users Crud</CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserContainer;
