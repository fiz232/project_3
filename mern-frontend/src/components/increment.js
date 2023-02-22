import { Component } from "react";

// export const Increment =()=>{
//     return<div style={{height:"100vh"}}>

//     </div>
// }

const stylings = { height: "100vh", marginTop: "200px" };

class PushupCounter extends Component {
  constructor(props) {
    super(props);

    //state is initial value
    this.state = { count: 0 };
  }

  //setState sets the new value
  incrementCount = () => {
    //console.log("Incrementor called");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let message = "";
    if (this.state.count < 5) {
      message = "You can do it";
    } else if (this.state.count < 8) {
      message = "Keep going you are doing well";
    } else if (this.state.count < 10) {
      message = "Almost there";
    } else {
      message = <b>"You DID IT !"</b>;
    }

    return (
      <div style={stylings}>
        <h1 className="text-6xl">PushupCounter</h1>
        <p>{this.state.count}</p>
        <p style={{ fontsize: "40px" }}>{message}</p>
        <button className="btn btn-success">Boostrap</button>
        <button
          className="bg-indigo-500 p-2 rounded-[6px]"
          onClick={this.incrementCount}
        >
          Add Reps
        </button>
      </div>
    );
  }
}

export default PushupCounter;
