import React from "react";
import "./theme.css";
import useLocalStorage from "./useLocalStorage";

export default function SwitchMode (){
    const[theme,setTheme] = useLocalStorage("theme","light"); //Hook返回值为[value,setValue]，value="light"

    function toggleTheme(){
        setTheme(theme==="light"?"dark":"light");
    }

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World!</p>
                <button onClick={toggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}
