import React, {useMemo, useState} from "react";
import ReactDOM from 'react-dom/client';
import '../index.css';


export default function Square(){
const [found, isFound] = useState(false);

const squareStyle = {
    backgroundColor: found ? 'red' : '#c6c6c6',
    margin: '2%',
    padding: '2px',
    width: '90%',
    height:'100%',
    borderRadius: '5%',
}

const maxNum = 900;
const baseUrl = 'https://www.serebii.net/swordshield/pokemon/';

const currImage = useMemo( () =>  generateImage(),[]);

function generateImage(){
    const number = String(Math.floor(Math.random() * maxNum)+1).padStart(3,'0');

    console.log(baseUrl + number + '.png');
    return baseUrl + number + '.png';
}

return(
    <div>
    {/* <img src = {generateImage(baseUrl)} style={squareStyle} onClick= { () => isFound(found => !found)} alt='logo'></img> */}
    <img src = {currImage} style={squareStyle} onClick= { () => isFound(found => !found)} alt='logo'></img>
    </div>

);

};
