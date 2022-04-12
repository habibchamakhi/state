// const { Component } = require("react");
import { Component } from "react";
import Profil from "./Components/Profil/Profil";
import "./App.css";
import User from "./user.jpg"

class App extends Component {
  state = {
    img : {User},
    bio : "i am full stack devloper",
    fullName: "habib chamakhi",
    show: false,

  };
   

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    console.log("Mounting App component");
  }

  componentDidUpdate() {
    console.log("Updating App component");
  }

  componentWillUnmount() {
    console.log("Destruction App component");
  }

  render() {
    return (
      <>
        <h1>Welcome</h1>
       <img src={User} alt="user"/>
       <br/>

        <button onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        
        
        {this.state.show ? <Profil fullName={this.state.fullName} bio={this.state.bio} /> : null}
        

      </>
    );
  }
}

export default App;