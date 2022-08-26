import React, {useState} from 'react';
import '../App.css';
import Square from './BingoSquare';

class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(25).fill(<Square/>),
        moves: ""
      };
  
    }

    renderSquare() {
        return(
        this.state.squares.map((squareObj) =>
            <div class='grid-item' >{squareObj}</div>
        )
        );
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
        </div>
      );
    }
  }

  export default Board;