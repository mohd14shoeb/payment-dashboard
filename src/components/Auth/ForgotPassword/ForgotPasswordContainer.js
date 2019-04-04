import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';
import EmailForm from './EmailForm';

class ForgotPasswordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {}
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        let errors = {};
        if (name === 'email') {
            if (!value) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ) {
                errors.email = 'Invalid email address';
            }
        }
        this.setState({
            errors: errors
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log('email', this.state.email);
        window.location = '/email-password-reset-link';
    }

    render() {
        const { email, errors } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="5">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <EmailForm
                                            onClick={this.handleSubmit.bind(
                                                this
                                            )}
                                            onChange={this.handleChange}
                                            email={email}
                                            errors={errors}
                                        />
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(ForgotPasswordContainer);
