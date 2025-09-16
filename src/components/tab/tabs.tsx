import "./tabs.css";
import React, { ReactElement} from "react";

type TabItemType = {
    label:string;
    content:ReactElement; //表示一个合法的 React 元素（通常是 JSX 标签）
}
type TabsProps = {
    tabsContent:TabItemType[];
    onChange:(currentTabIndex:number)=>void;
}

export default function Tabs({tabsContent,onChange}:TabsProps){
    const [currentTabIndex,setCurrentTabIndex]= React.useState(0);

    function handleOnClick(getCurrentIndex:number){
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className="wrapper">

            <div className="heading">
                {tabsContent.map((item,index)=>(
                    <div className={`tab-item ${index===currentTabIndex? "active":""}`}
                        key={item.label}
                        onClick={()=>handleOnClick(index)}
                    >
                    <span className="label">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )
}