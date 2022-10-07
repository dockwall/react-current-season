import React from "react";
import ReactDOM from "react-dom/client"
import SeasonDisplay from "./SeasonDisplay";

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {

    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    render() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        } else if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <div>Loading...</div>
    }
}

root.render(<App />);
