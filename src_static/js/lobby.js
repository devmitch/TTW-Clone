import API_URL from "./app.js";
import ScrambleBar from "./scramble_bar.js"
import Timer from "./timer.js"
import HistoryBar from "./history_bar.js"

const USER_ID = 0;
const LOBBY_ID = 1;

export default class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scramble: null,
                      solves: []}
        
        this.newScramble = this.newScramble.bind(this);
        this.getSolveData = this.getSolveData.bind(this);
    }

    newScramble() {
        return fetch(API_URL + "scrambles")
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    scramble: responseJSON.scramble
                })
            })
    }

    saveResult(time) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", API_URL + "save_solve", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({lobbyId: LOBBY_ID, 
                                 data: {  
                                    userId: USER_ID,          
                                    scramble: this.state.scramble,
                                    time: time}
                                }));
    }

    getSolveData() {
        return fetch(API_URL + "get_solves")
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    solves: responseJSON
            })
        })
    }

    componentDidMount() {
        this.newScramble();
        this.getSolveData();
    }

    render() {
        return (
            <div>
                <ScrambleBar scramble={this.state.scramble}/>
                <Timer callbackParent={(time) => {
                    this.newScramble();
                    this.saveResult(time);
                    this.getSolveData();
                }}/>
                <HistoryBar solves={this.state.solves}/>
            </div>
        );
    };
};