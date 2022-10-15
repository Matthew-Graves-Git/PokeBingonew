import React, {useMemo, useState} from "react";
import ReactDOM from 'react-dom/client';
import '../index.css';


export default function Square(props){
const [found, isFound] = useState(false);

const squareStyle = {
    backgroundColor: found ? 'red' : '#c6c6c6',
    margin: '2%',
    padding: '2px',
    width: '90%',
    height:'100%',
    borderRadius: '5%',
}
const value = props.value;
// const number = '0';
// const maxNum = 900;
// const baseUrl = 'https://www.serebii.net/swordshield/pokemon/';

// const currImage = useMemo( () =>  generateImage(),[]);

// function generateImage(){
//     let number = 0;
//     if (props.value === "Sword"){
//          number = String(Math.floor(Math.random() * maxNum)+1).padStart(3,'0');
//     }else{
//         number = String(Math.floor(Math.random() * 100)+1).padStart(3,'0');
//     }
//     console.log(value);
//     console.log(baseUrl + number + '.png');
//     return baseUrl + number + '.png';
// }

return(
    <div>
    {/* <img src = {generateImage(baseUrl)} style={squareStyle} onClick= { () => isFound(found => !found)} alt='logo'></img> */}
    <img src = {props.url} style={squareStyle} onClick= { () => isFound(found => !found)} alt={{value}}></img>
    </div>

);

};
