import React, { useState,useEffect } from "react";
import "./styles.css";

type SquareFcType = {
    value:string;
    onClickFn:()=>void;
}

function Square({value,onClickFn}:SquareFcType){
    return (
        <button className={`square ${value==="X"?"X":"O"}`} onClick={onClickFn}>
            {value}
        </button>
    )
}

export default function TicTacToe (){
    const [squares,setSquares] = useState<string[]>(Array(9).fill(""));
    const [isXTurn,setIsXTurn] = useState<boolean>(true);
    const [status,setStatus] = useState<string>("");
    
    //胜负判断逻辑
    function getWinner(squares:string[]){
        const winningPatterns = [
            [0,1,2],[3,4,5],[6,7,8], //横向
            [0,3,6],[1,4,7],[2,5,8], //纵向
            [0,4,8],[2,4,6]          //对角线
        ];

        for(let i=0; i<winningPatterns.length; i++){
            const [x,y,z] = winningPatterns[i];
            if(squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) 
            return squares[x];
        }

        return null;
    }

    //点击格子的操作逻辑
    function handleClick(currentSquareIndex:number){
        let cpySquares = [...squares];
        if(getWinner(cpySquares) || cpySquares[currentSquareIndex]) return;
        cpySquares[currentSquareIndex] = isXTurn ? "X" : "O";
        setIsXTurn(prev=>!prev);
        setSquares(cpySquares);
    }

    //重新开始游戏
    function handleRestart(){
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
    }

    //提示当前游戏进程
    function handleStatus(){
        if(getWinner(squares)){
            setStatus(`${getWinner(squares)} wins! Please restart the game...`)
        } else if(!getWinner(squares) && squares.every(item=>item!=="")){
            setStatus(`This is a draw ! Please restart the game`);
        } else {
            setStatus(`Next player is ${isXTurn?"X":"O"}`);
        }
    }
    useEffect(()=>{
        handleStatus();
    },[squares,isXTurn]);

    return (
        <div className="tic-tac-toe">
            
            <div className="board">
                {squares.map((value,index)=>(
                    <Square key={index} 
                            value={value} 
                            onClickFn={()=>handleClick(index)}
                    />
                ))}
            </div>
            
            <h1>{status}</h1>
            <button onClick={handleRestart} className="restartBtn">Restart</button>
        </div>
    )
}