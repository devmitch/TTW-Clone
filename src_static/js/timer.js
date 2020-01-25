export default class Timer extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {displayTime: 0,
                      isRunning: false,
                      startTime: null};

        this.divStyle = {
            width: "100%",
            height: "40vh",
            backgroundColor: "#363636",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "40vh",
            fontSize: "120px",
            marginTop: "5px"
        };

        this.timing = this.timing.bind(this);
    }

    timing() {
        if (!this.state.isRunning) {
            this.state.isRunning = true;
            this.state.startTime = new Date().getTime();

            this.timer = setInterval(() => {
                this.state.displayTime = 
                        new Date().getTime() - this.state.startTime;
                this.setState({displayTime: this.state.displayTime / 1000});
            }, 1)
        } else {
            this.state.isRunning = false;
            clearInterval(this.timer);
            this.props.callbackParent();
        }
    }

    render() {
        return (
            <div style={this.divStyle} onKeyDown={this.timing} tabIndex="0">
                {this.state.displayTime}
            </div>
        )
    }
}