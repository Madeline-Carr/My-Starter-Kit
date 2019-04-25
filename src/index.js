import React from 'react';
import ReactDOM from 'react-dom';
import Child from './js/ChildComponent';

const title = 'React is Working!';

ReactDOM.render(
    <div className="container">
        <h1>{title} </h1>
        <Child />
    </div>,
    document.getElementById('app')
);
