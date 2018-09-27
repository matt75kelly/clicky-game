import React, { Component } from 'react';
import './App.css';
import Banner from "./components/Banner/Banner.js";
import Footer from "./components/footer/footer.js";
import Jumbotron from "./components/Jumbotron/jumbotron.js";
import TileWrapper from "./components/tileWrapper/tileWrapper.js";

class App extends Component {
  state ={
    banner_text: "Click an Image to Begin",
    score: 0,
    highest_score: 0,
    grid : [
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
      {img_src: "", isClicked: false},
    ]
  }

  componentDidMount(){
    this.loadGrid();
  }

  loadGrid = () => {
    const updatedState = this.state.grid;
    updatedState.forEach((element, index, array)=>{
      array[index].isClicked = false;
      array[index].img_src = `${window.location.origin}/images/img-${index}.jpg`;
    });
    this.setState({grid : updatedState});
  }

  shuffleImages = () => {
    let indexArr = [];

    for(let i = 0; i < 12; i++){
      let rand = Math.floor(Math.random()*12);
      if(!indexArr.includes(rand)){
        indexArr.push(rand);
      }
      else i--;
    }

    const mixArr = this.state.grid.map( (img, key, array) =>{
      return array[indexArr[key]];
    })
    this.setState({
      grid: mixArr
    })
  }

  resetGame = () => {
    if(this.state.score > this.state.highest_score){
      this.setState({
        highest_score: this.state.score
      })
    }
    this.loadGrid();
    this.shuffleImages();
    this.setState({
      score: 0,
    });
  }

  handleClickedImage = event =>{
    const id = event.target.id;
    if(this.state.grid[id].isClicked){
      this.setState({banner_text: "You Guessed Incorrectly!"});
      this.resetGame();
    }
    else{
      let updateObj = this.state.grid;
      updateObj[id].isClicked = true;
      this.setState({banner_text: "You Guessed Correctly!", score: this.state.score +1, grid: updateObj})
      this.shuffleImages();
    }
  }

  render() {
    return (
      <div>
        <Banner
          text={this.state.banner_text}
          current_score ={this.state.score}
          top_score ={this.state.highest_score}/>
        <Jumbotron/>
        <TileWrapper
        images={this.state.grid}
        handleClick={this.handleClickedImage}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
