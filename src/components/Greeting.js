import React from 'react';

class Greeting extends React.Component{
    render(){

        const myElement= <div><h1>Hello {this.props.name}</h1></div>;
        // React.createElement('h1',null,'hello greeting');
        return myElement;
    }
}

export default Greeting;