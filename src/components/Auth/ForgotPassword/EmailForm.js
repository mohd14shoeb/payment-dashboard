import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            errors: this.props.errors
        };
    }

    componentWillReceiveProps(nextProps) {
        const { email, errors } = nextProps;
        this.setState({
            email,
            errors
        });
    }

    render() {
        const { email, errors } = this.state;
        return (
            <Form method={'post'}>
                <h1>Forgot password</h1>
                <p className="text-muted">
                    Enter the Email Address. You will receive an email with a
                    link to reset your password.
                </p>
                <InputGroup className="mb-4">
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
                <Row>
                    <Col xs="12">
                        <Button
                            color="primary"
                            className="px-4 btn-block"
                            onClick={this.props.onClick}
                            type="submit"
                        >
                            Email password reset link
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs="12" className="text-center">
                        <Link to="/login" className="btn-link">
                            Remember the password?
                        </Link>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default withRouter(EmailForm);
