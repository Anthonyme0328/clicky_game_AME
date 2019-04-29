import React, { Component } from "react";
import Cards from "./components/Cards/cards";
import NavBar from "./components/Nav/navBar";
import images from "./images.json";
import "./App.css"

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {

      images,

      highScore: 0,

      currentScore: 0,

      alreadyClicked: []

    }

  }



  handleImgClick = (id, clicked) => {

    // changes boolean of img from false to true after click
    const newArray = this.state.images.map(image => {

      return image
    });



    // if clicked and img = false adds 1 to state then moves images around
    if (this.state.alreadyClicked.includes(id)) {
      alert("You already clicked that one, press OK to restart")

    } else {

      this.setState({

        currentScore: this.state.currentScore + 1,

        images: newArray,

        alreadyClicked: [...this.state.alreadyClicked, id]

      });
    }

    console.log(this.state.alreadyClicked);

    if (this.state.currentScore > this.state.highScore) {
      this.setState({ highScore: this.state.currentScore });
    }

  }

  random = (arr) => {

    return (arr.sort(function (a, b) { return 0.5 - Math.random() }));
  }


  render() {

    return (
      <div className="App">

        <NavBar highScore={this.state.highScore} currentScore={this.state.currentScore} />

        <div className="characterDiv">

          {this.random(this.state.images).map(image => (
            <Cards
              key={image.id}

              id={image.id}

              image={image.img}

              clicked={image.clicked}

              handleClick={this.handleImgClick}

            />

          ))}

        </div>

      </div>

    );

  }

}

export default App;
