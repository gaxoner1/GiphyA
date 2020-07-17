/* API Project converted to try catch block 
with async-await methods*/

import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      image: "",
      title: "Giphy API"
    };
  }

  handleInput = e => {
    this.setState({
      search: e.target.value
    });
  };

  search = e => {
    e.preventDefault();
    console.log(this.state.search);
    //pass the query into getImage fucntion
    this.getImage(this.state.search);
    //clear state after its passed.
    this.setState({
      search: ""
    });
  };

  getImage = async query => {
    try {
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=qDxuibsVZ3A1TqAqD5DczQv9h9ZOsG6c&s=${query}`,
        { mode: "cors" }
      );
      let responseJson = await response.json();
      console.log(`response.json(): ${responseJson}`);
      let url = responseJson.data.images.original.url;
      console.log(`response: ${url}`);
      this.setState({
        image: url
      });
    } catch (err) {
      console.log(`todo Handle Error: ${err}`);
    }
  };

  setImageState = image => {
    this.setState({
      image: image
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <form id="search" onSubmit={this.search}>
          <input
            type="text"
            placeholder="Search for Giphy"
            value={this.state.search}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <img src={this.state.image} alt="" />
      </div>
    );
  }
}
export default App;
