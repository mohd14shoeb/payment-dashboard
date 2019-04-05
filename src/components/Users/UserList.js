import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

export const UserList = ({ users }) => (
    <Card>
        <CardHeader>
            <CardTitle>
                <h2>Users</h2>
            </CardTitle>
        </CardHeader>
        <CardBody>
            <ul>
                {users.map(user => (
                    <li>
                        {user.name.first}---------{user.email}
                    </li>
                ))}
            </ul>
        </CardBody>
    </Card>
);
