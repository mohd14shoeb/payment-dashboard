import React from 'react';

const Home = React.lazy(() => import('./components/Home/Home'));
const Users = React.lazy(() => import('./components/Users/Users'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/login', exact: true, name: 'Home' },
    { path: '/home', name: 'Dashboard', component: Home },
    { path: '/users', name: 'Users', component: Users }
];

export default routes;
