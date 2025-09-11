import React from "react";
import "./styles.css";

export default function RandomColor(){
    const [color,setColor] = React.useState<string>();

    function generateHexColor(){
        const hexChars = "0123456789ABCDEF";
        let hexColor = "#";
        for(let i=0; i<6; i++){
            const randomIndex = Math.floor(Math.random()*16);
            hexColor += hexChars[randomIndex] ;
            }
        setColor(hexColor);
    }

    function generateRgbColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const rgbColor =  `rgb(${r},${g},${b})`;
        setColor(rgbColor);
    }

    return (
        <div className="random-color" style={{backgroundColor:color}}>
            <div className="buttons">
                <button className="hex" onClick={generateHexColor}>HEX Color</button>
                <button className="rgb"onClick={generateRgbColor}>RGB Color</button>
            </div>
            <p className="color-value">{color}</p>            
        </div>
    )
}