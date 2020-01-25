import API_URL from "./app.js";
import ScrambleBar from "./scramble_bar.js"
import Timer from "./timer.js"

const USER_ID = 0;
const LOBBY_ID = 1;

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

    saveResult(time) {
        console.log(this.state.scramble)
        let xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "send_scrambles", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({lobbyId: LOBBY_ID, 
                                 data: {  
                                    userId: USER_ID,          
                                    scramble: this.state.scramble,
                                    time: time}
                                }));
    }

    render() {
        return (
            <div>
                <ScrambleBar scramble={this.state.scramble}/>
                <Timer callbackParent={(time) => {
                    this.newScramble();
                    this.saveResult(time);
                }}/>
            </div>
        );
    };
};