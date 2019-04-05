import React, { Component } from 'react';
import {
    Button,
    Alert,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            email: this.props.email,
            password: this.props.password,
            confirmpassword: this.props.confirmpassword,
            errors: this.props.errors
        };
    }

    componentWillReceiveProps(nextProps) {
        const {
            username,
            email,
            password,
            confirmpassword,
            errors
        } = nextProps;
        this.setState({
            username,
            email,
            password,
            confirmpassword,
            errors
        });
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
            <Form>
                <h1>Register</h1>
                <p className="text-muted">Create your account</p>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        name="username"
                        username={username}
                        onChange={this.props.onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        email={email}
                        onChange={this.props.onChange}
                    />
                </InputGroup>
                {errors.email && <Alert color="warning">{errors.email}</Alert>}
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-lock" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="password"
                        password={password}
                        onChange={this.props.onChange}
                    />
                </InputGroup>
                <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-lock" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        name="confirmpassword"
                        confirmpassword={confirmpassword}
                        onChange={this.props.onChange}
                    />
                </InputGroup>
                <Button color="success" onClick={this.props.onClick} block>
                    Create Account
                </Button>
            </Form>
        );
    }
}

export default RegisterForm;
