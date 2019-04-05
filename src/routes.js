import React from 'react';

const HomeContainer = React.lazy(() =>
    import('./components/Home/HomeContainer')
);
const UserContainer = React.lazy(() =>
    import('./components/Users/UserContainer')
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/login', exact: true, name: 'Home' },
    { path: '/home', name: 'Home', component: HomeContainer },
    { path: '/users', name: 'Users', component: UserContainer }
];

export default routes;
