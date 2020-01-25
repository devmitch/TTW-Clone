import API_URL from "./app.js";

export default class ScrambleBar extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {};

        this.divStyle = {
            width: "100%",
            backgroundColor: "#363636",
            textAlign: "center",
            fontSize: "40px"
        }
    }

    componentDidMount() {
        return fetch(API_URL + "scrambles")
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    scramble: responseJSON.scramble
                })
            })
    }
    
    render() {
        return <div style={this.divStyle}>{this.state.scramble}</div>
    }
}