import React from 'react';
import ReactDOM from 'react-dom';
import Child from './js/childComponent';

const title = 'React is Working!';
const App = () => {
    return (
        <div className="container">
            <h1>{title}</h1>
            <Child />
        </div>
    );
};

export default App;
