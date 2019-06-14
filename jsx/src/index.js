// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText () {
    return 'Click on me!';
}

// Create a React component
const App = () => {
    const buttonText = 'Click Me!';

    return (
        <div>
            {/*Adding a class to an element in JSX we use className instead of just class*/}
            <label className={'label'} htmlFor={'name'}>Enter name:</label>
            <input id={'name'} type={'text'} />
            {/*Inline styling is done differently in JSX compared to HTML and can be seen below
               Instead of background-color we do backgroundColor and we put two curly braces*/}
            {/*Below are two different examples of JSX referencing a JS variable*/}
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
            <button style={{backgroundColor: 'red', color: 'white'}}>{getButtonText()}</button>
        </div>
    )
};

// Take the React component and show it on the screen
ReactDOM.render(
  <App />,
    document.querySelector('#root')
);