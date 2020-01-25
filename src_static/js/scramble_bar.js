import API_URL from "./app.js";

export default class ScrambleBar extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {};
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
        return <div>{this.state.scramble}</div>
    }
}