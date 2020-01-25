import API_URL from "./app.js";
import ScrambleBar from "./scramble_bar.js"
import Timer from "./timer.js"

export default class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scramble: null,
                      time: null}
        this.newScramble = this.newScramble.bind(this);
    }

    newScramble() {
        console.log(this.state)
        return fetch(API_URL + "scrambles")
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    scramble: responseJSON.scramble
                })
            })
    }

    render() {
        return (
            <div>
                <ScrambleBar scramble={this.state.scramble}/>
                <Timer callbackParent={this.newScramble}/>
            </div>
        );
    };
};