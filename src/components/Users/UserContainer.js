import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { UserList } from './UserList';

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    _id: '5ca6ba052f7e05ea7c1819e9',
                    name: {
                        first: 'Terry',
                        last: 'Todd'
                    },
                    email: 'terry.todd@undefined.org'
                },
                {
                    _id: '5ca6ba051408c40748ac6a2e',
                    name: {
                        first: 'Sofia',
                        last: 'Santana'
                    },
                    email: 'sofia.santana@undefined.io'
                },
                {
                    _id: '5ca6ba059d7c5324ec27edec',
                    name: {
                        first: 'Tracy',
                        last: 'Madden'
                    },
                    email: 'tracy.madden@undefined.tv'
                },
                {
                    _id: '5ca6ba05d3f72c35cefa3a02',
                    name: {
                        first: 'Meyers',
                        last: 'Brock'
                    },
                    email: 'meyers.brock@undefined.me'
                },
                {
                    _id: '5ca6ba05c4ef351c51d62b66',
                    name: {
                        first: 'Pitts',
                        last: 'Lindsay'
                    },
                    email: 'pitts.lindsay@undefined.co.uk'
                },
                {
                    _id: '5ca6ba05649287f3e6b5efdb',
                    name: {
                        first: 'Manning',
                        last: 'May'
                    },
                    email: 'manning.may@undefined.info'
                },
                {
                    _id: '5ca6ba05a3e436f067538c48',
                    name: {
                        first: 'Lowery',
                        last: 'Larsen'
                    },
                    email: 'lowery.larsen@undefined.com'
                },
                {
                    _id: '5ca6ba0522da33f07482ed04',
                    name: {
                        first: 'Rich',
                        last: 'Holland'
                    },
                    email: 'rich.holland@undefined.biz'
                },
                {
                    _id: '5ca6ba056843eb183f7080f7',
                    name: {
                        first: 'Byrd',
                        last: 'Zamora'
                    },
                    email: 'byrd.zamora@undefined.net'
                },
                {
                    _id: '5ca6ba057ece9ad972a94d22',
                    name: {
                        first: 'Jeanne',
                        last: 'Porter'
                    },
                    email: 'jeanne.porter@undefined.biz'
                }
            ]
        };
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <UserList users={this.state.users} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserContainer;
