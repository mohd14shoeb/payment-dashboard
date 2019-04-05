import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

export const WelcomeWidget = index => (
    <Card>
        <CardHeader>
            <CardTitle>
                <h2>Welcome Widget</h2>
            </CardTitle>
        </CardHeader>
        <CardBody>Welcome .....</CardBody>
    </Card>
);
