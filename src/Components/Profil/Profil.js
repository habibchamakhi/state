import React, { Component } from "react";

class Profil extends Component {
  state = {
    timer: 0,
  };

  componentDidMount() {
    console.log("Mounting Profile component ");

    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Updating Profile component");
  }

  componentWillUnmount() {
    console.log("Destruction Profile component");
  }

  render() {
    return (
      <div className="profil">
        <h2>{this.props.fullName}</h2>

        <h3>{this.props.bio}</h3>
        

        <h4>{this.state.timer}</h4>
      </div>
    );
  }
}

export default Profil;