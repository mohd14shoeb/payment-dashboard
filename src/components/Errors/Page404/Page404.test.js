import React from 'react';
import ReactDOM from 'react-dom';
import Page404Container from './Page404Container';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page404Container />, div);
    ReactDOM.unmountComponentAtNode(div);
});
