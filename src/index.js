import React from "react";
import ReactDOM from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null }

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ lat: error.message })
        );
    }



    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

root.render(<App />);
