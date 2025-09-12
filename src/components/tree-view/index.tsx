import React from "react";
import "./styles.css";
import MenuList from "./menu-list";


type ItemType = {
    label:string;
    children?:ItemType[]; //递归类型定义
}

export default function TreeView({menus}:{menus:ItemType[]}){
    return (
        <div className="tree-view-container">
            <MenuList list={menus}/>
        </div>
    )
}