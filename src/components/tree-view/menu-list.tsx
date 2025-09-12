import React from "react";
import MenuItem from "./menu-item";

type ItemType = {
    label:string;
    children?:ItemType[]; //递归类型定义
}

export default function MenuList({list}:{list:ItemType[]}){

    return (
         <ul className="menu-list">
            {list&&list.length ?
                list.map(listItem=><MenuItem item={listItem}/>) : null
            }
         </ul>
    )
}