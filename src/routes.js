import React from 'react';

const Dashboard = React.lazy(() => import('./layouts/Dashboard/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/login.js', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
