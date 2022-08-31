import React from "react";
import "../App.css";
import visa from "../visa.png";
class visainput extends React.Component {
  state = {
    numberCard: {},
    date: {},
    name: {},
  };
  editNumberCard = (event) => {
    this.setState({
      numberCard: event.target.value,
    });
  };
  editdate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
  editname = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={visa} alt="BigCo Inc. logo" />
          <input
            type="number"
            className="numberCard"
            onChange={(event) => this.editNumberCard(event)}
          />
          <input
            type="number"
            className="date"
            onChange={(event) => this.editdate(event)}
          />
          <input
            type="textu"
            className="name"
            onChange={(event) => this.editname(event)}
          />
        </header>
      </div>
    );
  }
}
export default visainput;
// export default Todo;
