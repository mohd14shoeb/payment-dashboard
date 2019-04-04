import React from 'react';
import ReactDOM from 'react-dom';
import Page500Container from './Page500Container';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page500Container />, div);
    ReactDOM.unmountComponentAtNode(div);
});
