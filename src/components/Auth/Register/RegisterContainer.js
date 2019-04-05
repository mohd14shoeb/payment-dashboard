import React, { Component } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import RegisterForm from './RegisterForm';

class RegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
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
        const {
            username,
            email,
            password,
            confirmpassword,
            errors
        } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <RegisterForm
                                        onClick={this.handleSubmit.bind(this)}
                                        onChange={this.handleChange}
                                        username={username}
                                        email={email}
                                        password={password}
                                        confirmpassword={confirmpassword}
                                        errors={errors}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default RegisterContainer;
