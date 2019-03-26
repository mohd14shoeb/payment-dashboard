import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,

  Row,
} from 'reactstrap';
import Books from "./books";


class Dashboard extends Component {
  constructor(props) {
    super(props);


    this.state = {
    };
  }



  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

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
            <CardBody>
              <Books/>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
