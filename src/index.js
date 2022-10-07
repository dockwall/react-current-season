import React from "react";
import ReactDOM from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }



    render() {
        if (this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        } else if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <div>Loading...</div>
    }
}

root.render(<App />);
