import React, {useState} from 'react';
import '../App.css';
import Square from './BingoSquare';

class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array.from({length: 25}, () => String(Math.floor(Math.random() * 900)+1).padStart(3,'0')),
        value: props.value,
        url: props.baseUrl,
        allowed: false
      };
  
    }



    
    renderSquare() {
        return(
        this.state.squares.map((squareObj) =>
            <div className='grid-item' key = {squareObj} ><Square value = {this.state.value} url = {this.state.url + squareObj + '.png'}></Square></div>
        )
        );

    }
    genNewList(){
      let uniquePokemonSet = new Set();
      let cap = 200;
      if(this.state.value === 'Sword'){
        cap = 900;
      }
      while(uniquePokemonSet.size < 25){
        uniquePokemonSet.add(String(Math.floor(Math.random() * cap)+1).padStart(3,'0'));
      }
      return Array.from(uniquePokemonSet);
    }
    async change(){
      let copy = this.genNewList();
      console.log(copy);
      this.setState({squares:copy});
    }
    dupe(){
      let copy = this.state.squares;
      copy[2] = '200';
      copy[3] = '200'
      this.setState({squares:copy});
    }

    render() {
      return (
        <div>
            {/* <div class="sidenav">
            <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
            </div> */}
        <div className='grid-container'>
            {this.renderSquare()}
        </div>
        <button onClick={this.change.bind(this)}>Change</button>
        <button onClick={this.dupe.bind(this)}>dupe</button>
        </div>
      );
    }
  }

  export default Board;