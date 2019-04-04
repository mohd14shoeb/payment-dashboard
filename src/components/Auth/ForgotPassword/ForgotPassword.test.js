import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ForgotPassword from './EmailForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <ForgotPassword />
        </MemoryRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
