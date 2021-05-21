import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false
    };
  }
  handeClick = () => {
    this.setState({ isLightOn: !this.state.isLightOn });
  };
  render() {
    const url = this.state.isLightOn
      ? "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
      : "https://learn.seytech.co/assets/slides/js-intro/assets/lighton.png";
    const btnText = this.state.isLightOn ? "Turn On" : "Turn Off";
    return (
      <div>
        <img src={url} />
        <button onClick={this.handeClick}>{btnText}</button>
      </div>
    );
  }
}
export default App;
