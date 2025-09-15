import React from "react";

export default function useLocalStorage<T>(key:string,defaultValue:T){
    const [value,setValue]=React.useState<T>(()=>{
        let currentValue;
        try {
            currentValue= JSON.parse(
                localStorage.getItem(key) || String(defaultValue) //刷新保持不变的核心
            );
        } catch (error) {
            console.log(error);
            currentValue=defaultValue;
        }
        return currentValue;
    });

    //将更新值保存到本地
    React.useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    return [value,setValue] as const; //返回 tuple，方便解构

}