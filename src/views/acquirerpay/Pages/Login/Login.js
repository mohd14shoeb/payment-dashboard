import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    let errors = {}
    if(name === 'email')
    {
      if (!value) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Invalid email address';
      }
    }
    if(name === 'password')
    {
      if (!value) {
        errors.password = 'Required';
      }
    }
    this.setState({
      errors: errors
    });
  };
  loginFunction = () =>
  {
    if(this.state.email === 'admin@admin.com' && this.state.password === '123456789')
    {
      let token = 'Login_token_for_coreui'
      localStorage.setItem('id_token', token);
      window.location = "/";
    }
    else
    {
      let errors = {}
      errors.password = 'Username or password is incorrect.';
      this.setState({
        errors: errors
      });
    }
  };
  render() {
    const { password, email } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" autoComplete="Email"  name="email" value={email} onChange={this.handleChange} />
                      </InputGroup>
                      {this.state.errors.email && <Alert color="warning">{this.state.errors.email}</Alert>}
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={password} onChange={this.handleChange} />
                      </InputGroup>
                      {this.state.errors.password && <Alert color="warning">{this.state.errors.password}</Alert>}
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.loginFunction}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/forgot-password">
                            <Button color="link" className="px-0">Forgot password?</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
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

export default Login;
