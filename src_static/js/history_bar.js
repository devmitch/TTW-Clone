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
            borderCollapse: "collapse",
            width: "100%"
        }

        this.renderTableData = this.renderTableData.bind(this);
    }

    renderTableData() {
        console.log(this.props.solves)
        return this.props.solves.map(solve => {
            console.log(solve)
            const {scramble, time} = solve
            return (
               <tr>
                  <td>{scramble}</td>
                  <td>{time}</td>
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
                    <th>Time</th>
                    <th>Scramble</th>
                </tr>
                {this.renderTableData()}
                </table>
            </div>
        )
    }
}