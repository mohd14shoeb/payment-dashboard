import React from 'react';

const Home = React.lazy(() => import('./components/Home/Home'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/login', exact: true, name: 'Home' },
    { path: '/home', name: 'Dashboard', component: Home }
];

export default routes;
