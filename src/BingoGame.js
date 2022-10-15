import React from "react";
import Board from "./components/BingoBoard";
import { useEffect } from "react";


class Game extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          moves: "",
          value: 'Shield'
        };
    
    }

    refreshPage() {
        
        window.location.reload(false);
    }



    render(){
        return(
            <div>
                <button onClick={this.refreshPage}>hello</button>
                <Board baseUrl={'https://www.serebii.net/swordshield/pokemon/'} value = {this.state.value}/>
            </div>


        )

    }



}
export default Game;