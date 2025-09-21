import React from "react";
import data from "./data.js";
import "./styles.css"

type DataType = {
    id:string;
    question:string;
    answer:string;
}

export default function Accordian(){
    const [allowMultiple,setAllowMultiple] = React.useState<boolean>(false);    //状态变量，控制是“单开模式”or“多开模式”
    const [allowList,setAllowList] = React.useState<string[]>([]);   //用于保存展开项的id

    function toggleAllowMultiple(){
        setAllowMultiple((prev)=>{
            const next=!prev;
            if(!next){  //即allowMultiple为false时，即是从多开切换为单开模式时，将展开数组清空，强制所有项变回折叠
                setAllowList([]);
            }
            return next ;
        })
    }

    function handleAnswers(id:string){  //设计展开项数组里的内容
        if(allowMultiple){ //为真，则多开模式，以数组保存
            setAllowList((prev)=>
                prev.includes(id)? prev.filter((x)=>x!==id) : [...prev,id]);
        } else {    //为假，则单开模式，保存单个数据
            setAllowList((prev)=>prev.includes(id)?[]:[id]);
        }
    }

    return (
        <div className="accordian">
            <button onClick={toggleAllowMultiple}>
                {allowMultiple?"切换为 单独展开":"切换为 多项展开"}
            </button>

            {data.map(item=>(
                <div key={item.id} className="qa-container">
                    <p className="question" onClick={()=>handleAnswers(item.id)}> 
                        {item.question}
                    </p>
                    {allowList.includes(item.id) && <p className="answer">{item.answer}</p>}  
                </div>
            ))
            }
        </div>
    )
}