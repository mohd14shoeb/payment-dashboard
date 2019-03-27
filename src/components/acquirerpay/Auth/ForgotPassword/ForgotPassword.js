import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    this.setState({
      errors: errors
    });
  };
  loginFunction = () =>
  {
    window.location = "/";
  };
  render() {
    const { email } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Forgot password</h1>
                      <p className="text-muted">Enter the Email Address. You will receive an email with a link to reset your password.</p>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" autoComplete="Email"  name="email" value={email} onChange={this.handleChange} />
                      </InputGroup>
                      {this.state.errors.email && <Alert color="warning">{this.state.errors.email}</Alert>}
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.loginFunction}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/login">Remeber the password?</Link>
                        </Col>
                      </Row>
                    </Form>
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

export default ForgotPassword;
