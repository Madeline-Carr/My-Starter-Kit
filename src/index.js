import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

const title = 'React is Working!';

ReactDOM.render(
    <div className="container">
        <App />
    </div>,
    document.getElementById('app')
);
