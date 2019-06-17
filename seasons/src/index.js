import React  from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        // This is a reference to the parent's (React.Component) constructor function
        super(props);

        // THIS IS THE ONLY TIME YOU DO DIRECT ASSIGNMENT TO this.state
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            // We called setState to update the state object
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {console.log(err)}
        );
    }

    // React says we have to define render!!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);