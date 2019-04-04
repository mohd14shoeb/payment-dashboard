import React from 'react';
import ReactDOM from 'react-dom';
import Page401Container from './Page401Container';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Page401Container />, div);
    ReactDOM.unmountComponentAtNode(div);
});
