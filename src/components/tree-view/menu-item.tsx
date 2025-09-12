import React from "react";
import "./styles.css";
import MenuList from "./menu-list";

type ItemType = {
    label:string;
    children?:ItemType[]; //递归类型定义
}

type DisplayChildrenType = {
    [key:string]:boolean;
}

export default function MenuItem({item}:{item:ItemType}){
    const [displayChildren,setDisplayChildren] = React.useState<DisplayChildrenType>({});


    //构建 “切换展开/折叠状态” 的函数
    function handleToggleChildren(getCurrentLabel:string){
        setDisplayChildren(prev=>({...prev,
            [getCurrentLabel]: !displayChildren[getCurrentLabel]
        }))
    }

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}
                {/*条件渲染：此处放置图标：有children才渲染；点击获取对应的label；展开状态显示➖，折叠状态显示➕*/}
                    {item && item.children && item.children.length ?(
                        <span onClick={()=>handleToggleChildren(item.label)} className="icon">
                            {
                                displayChildren[item.label]?"➕":"➖"
                            }
                        </span>
                    ):null}
                </p>
            </div>

            {/*条件渲染：此处放置展开的子菜单*/}
                {item && item.children 
                      && item.children.length > 0       /*有children才渲染；*/
                      && displayChildren[item.label]    /*且状态为true，展开菜单，调用<MenuList/>*/
                    ? (<MenuList list={item.children}/>
                    ):null}
        </li>


   
    )
}