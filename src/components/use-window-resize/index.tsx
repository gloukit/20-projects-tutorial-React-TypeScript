import { useLayoutEffect, useState } from "react";

interface WindowSizesType{
    width:number;
    height:number;
}
export default function useWindowResize(){
    const [windowSizes,setWindowSizes] = useState<WindowSizesType>({width:0, height:0});

    function handleResize(){
        setWindowSizes({width:window.innerWidth,
                        height:window.innerHeight
        });
    }

    useLayoutEffect(()=>{
        handleResize();
        window.addEventListener("resize",handleResize);

        return ()=> window.removeEventListener("resize",handleResize);
    },[]);

    return windowSizes;
}