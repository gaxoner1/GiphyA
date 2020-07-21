/* API Project converted to try catch block 
with async-await methods*/

import React from "react";
import "./styles.css";

const keys = {
  app_id: "5fb1cce8",
  apiKey: "b9ff5d5d50e22b60f7fcf4ef5c9344d7"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // search: "",
      // image: "",
      mealSearch: "",
      mealResult: "",
      recipe: [],
      title: "Meal Ideas"
    };
  }

  handleInput = e => {
    this.setState({
      mealSearch: e.target.value
    });
  };

  search = e => {
    e.preventDefault();
    console.log(`at search- meal state: ${this.state.meal}`);
    //pass the query into getImage fucntion
    //this.getImage(this.state.search);
    this.getMeal(this.state.mealSearch);
    //clear state after its passed.
    this.setState({
      mealSearch: ""
    });
  };

  getMeal = async mealQuery => {
    try {
      let response = await fetch(
        `https://api.edamam.com/search?q=${mealQuery}&app_id=${
          keys.app_id
        }&app_key=${keys.apiKey}`,
        { mode: "cors" }
      );
      let mealJson = await response.json();
      console.log(`response.json(): ${mealJson}`);
      let food = mealJson.hits[0].recipe.label;
      let ingredients = mealJson.hits[0].recipe.ingredientLines;
      console.log(`response: ${ingredients}`);
      this.setState({
        mealResult: food,
        recipe: ingredients
      });
    } catch (err) {
      console.log(`todo Handle Error: ${err}`);
    }
  };

  // getGiphy = async query => {
  //   try {
  //     let response = await fetch(
  //       `https://api.giphy.com/v1/gifs/translate?api_key=qDxuibsVZ3A1TqAqD5DczQv9h9ZOsG6c&s=${query}`,
  //       { mode: "cors" }
  //     );
  //     let responseJson = await response.json();
  //     //console.log(`response.json(): ${responseJson}`);
  //     let url = responseJson.data.images.original.url;
  //     //console.log(`response: ${url}`);
  //     this.setState({
  //       image: url
  //     });
  //   } catch (err) {
  //     console.log(`todo Handle Error: ${err}`);
  //   }
  // };

  render() {
    return (
      <div className="wrap">
        <form id="search" onSubmit={this.search}>
          <input
            type="text"
            className="searchTerm"
            placeholder="Search Meal"
            value={this.state.mealSearch}
            onChange={this.handleInput}
          />
          <button type="submit" className="searchButton">
            search
          </button>
        </form>
        <h2>Meal Generator</h2>
        <div className="resultBody">
          <h3>{this.state.mealResult}</h3>
          <p>Recipe</p>
          {/* <img src={this.state.image} alt="" className="mealTitle" /> */}
          <div className="ingredients">
            <ul>
              {this.state.recipe.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* !-- The core Firebase JS SDK is always required and must be listed first --> */}
        <script src="/__/firebase/7.16.1/firebase-app.js" />
        {/* <!-- TODO: Add SDKs for Firebase products that you want to use
      https://firebase.google.com/docs/web/setup#available-libraries --> */}
        <script src="/__/firebase/7.16.1/firebase-analytics.js" />
        {/* <!-- Initialize Firebase --> */}
        <script src="/__/firebase/init.js" />
      </div>
    );
  }
}
export default App;
