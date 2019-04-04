import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Row
} from 'reactstrap';
import LoginForm from './LoginForm';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        if (name === 'password') {
            if (!value) {
                errors.password = 'Required';
            }
        }
        this.setState({
            errors: errors
        });
    };

    /**
     * Submit Handler
     * @param e
     */
    handleSubmit = event => {
        event.preventDefault();
        if (
            this.state.email === 'admin@admin.com' &&
            this.state.password === '123456789'
        ) {
            let token = 'Login_token_for_coreui';
            localStorage.setItem('id_token', token);
            window.location = '/';
            // to improve experience use history push
            // this.props.history.push('/home')
        } else {
            let errors = {};
            errors.password = 'Username or password is incorrect.';
            this.setState({
                errors: errors
            });
        }
    };

    render() {
        const { password, email, errors } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <LoginForm
                                            onClick={this.handleSubmit.bind()}
                                            onChange={this.handleChange}
                                            email={email}
                                            password={password}
                                            errors={errors}
                                        />
                                    </CardBody>
                                </Card>
                                <Card
                                    className="text-white bg-primary py-5 d-md-down-none"
                                    style={{ width: '44%' }}
                                >
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>
                                                Lorempp ipsum dolor sit amet,
                                                consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt
                                                ut labore et dolore magna
                                                aliqua.
                                            </p>
                                            <Link to="/register">
                                                <Button
                                                    color="primary"
                                                    className="mt-3"
                                                    active
                                                    tabIndex={-1}
                                                >
                                                    Register Now!
                                                </Button>
                                            </Link>
                                        </div>
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

export default LoginContainer;
