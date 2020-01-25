export default class ScrambleBar extends React.Component {   
    constructor(props) {
        super(props);
        console.log(this.props)
        this.divStyle = {
            width: "100%",
            backgroundColor: "#363636",
            textAlign: "center",
            fontSize: "40px"
        }
    }
    
    render() {
        return <div style={this.divStyle}>{this.props.scramble}</div>
    }
}