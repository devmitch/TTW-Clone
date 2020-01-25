import API_URL from "./app.js";

export default class HistoryBar extends React.Component {
    constructor(props) {
        super(props);
        this.divStyle = {
            height: "45vh",
            width: "35vw",
            backgroundColor: "#363636",
            textAlign: "center",
            float: "right",
            marginTop: "5px",
            overflowY: "scroll"
        }
        this.tableStyle = {
            marginTop: "5px",
            borderCollapse: "collapse",
            width: "95%",
            backgroundColor: "grey",
            marginLeft: "auto",
            marginRight: "auto",
        }
        this.cellStyle = this.headingStyle = {
            border: "1px solid white",
            textAlign: "left",
        }

        this.renderTableData = this.renderTableData.bind(this);
        this.renderAverages = this.renderAverages.bind(this);
    }

    renderAverages() {
        let times = this.props.solves.map(x => x.time);
        let bestSingle = Math.min(...times);

        return (
            <tr>
                <td style={this.cellStyle}>{bestSingle}</td>
                <td style={this.cellStyle}>To be implemented</td>
                <td style={this.cellStyle}>To be implemented</td>
            </tr>
        )
    }

    renderTableData() {
        console.log(this.props.solves)
        return this.props.solves.reverse().map(solve => {
            console.log(solve)
            const {scramble, time} = solve
            return (
               <tr>
                  <td style={this.cellStyle}>{scramble}</td>
                  <td style={this.cellStyle}>{time}</td>
               </tr>
            )
        })
    }

    render() {
        return (
            <div style={this.divStyle}>
                <h1>Solve History</h1>
                <table style={this.tableStyle}>
                    <tr>
                        <th style={this.headingStyle}>Best Single</th>
                        <th style={this.headingStyle}>Best Ao5</th>
                        <th style={this.headingStyle}>Current Ao5</th>
                    </tr>
                    {this.renderAverages()}
                </table>

                <table style={this.tableStyle}>
                <tr>
                    <th style={this.headingStyle}>Time</th>
                    <th style={this.headingStyle}>Scramble</th>
                </tr>
                {this.renderTableData()}
                </table>
            </div>
        )
    }
}