import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Alert,
    Button,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: this.props.password,
            errors: this.props.errors
        };
    }

    componentWillReceiveProps(nextProps) {
        const { email, password, errors } = nextProps;
        this.setState({
            email,
            password,
            errors
        });
    }

    render() {
        const { password, email, errors } = this.state;

        return (
            <Form method={'post'}>
                <h1>Login</h1>
                <p className="text-muted">Sign In to your account</p>

                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="Email"
                        name="email"
                        value={email}
                        onChange={this.props.onChange}
                    />
                </InputGroup>
                {errors.email && <Alert color="warning">{errors.email}</Alert>}

                <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-lock" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={password}
                        onChange={this.props.onChange}
                    />
                </InputGroup>
                {errors.password && (
                    <Alert color="warning">{errors.password}</Alert>
                )}

                <Row>
                    <Col xs="6">
                        <Button
                            color="primary"
                            type="submit"
                            onClick={this.props.onClick}
                            className="px-4"
                        >
                            Login
                        </Button>
                    </Col>
                    <Col xs="6" className="text-right">
                        <Link to="/forgot-password">
                            <Button color="link" className="px-0">
                                Forgot password?
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default LoginForm;
