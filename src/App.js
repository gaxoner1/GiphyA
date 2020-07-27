// import React from "react";
// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: "",
//       image: "",
//       title: "Giphy API"
//     };
//   }

//   handleInput = e => {
//     this.setState({
//       search: e.target.value
//     });
//   };

//   search = e => {
//     e.preventDefault();
//     console.log(this.state.search);
//     //pass the query into getImage fucntion
//     this.getImage(this.state.search);
//     //clear state after its passed.
//     this.setState({
//       search: ""
//     });
//   };

//   getImage = query => {
//     const passImage = this.setImageState;
//     // const img = document.querySelector("img");
//     fetch(
//       `https://api.giphy.com/v1/gifs/translate?api_key=qDxuibsVZ3A1TqAqD5DczQv9h9ZOsG6c&s=${query}`,
//       { mode: "cors" }
//     )
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(response) {
//         console.log(response.data.images.original.url);
//         console.log(document.querySelector("img"));
//         //TDOD: img.src works but not this.setState to render
//         //>>solved??? added passImage as const to make aware of state
//         //img.src = response.data.images.original.url
//         return response.data.images.original.url;
//       })
//       .then(function(response) {
//         console.log(`response from object: ${response}`);
//         passImage(response);
//       });
//   };

//   setImageState = image => {
//     this.setState({
//       image: image
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <form id="search" onSubmit={this.search}>
//           <input
//             type="text"
//             placeholder="Search for Giphy"
//             value={this.state.search}
//             onChange={this.handleInput}
//           />
//           <button type="submit">Add</button>
//         </form>
//         <img src={this.state.image} alt="" />
//       </div>
//     );
//   }
// }
// export default App;
