import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <div>
            Hi!
        </div>;
    }
};

ReactDOM.render(React.createElement(Hello), document.getElementById('root'));