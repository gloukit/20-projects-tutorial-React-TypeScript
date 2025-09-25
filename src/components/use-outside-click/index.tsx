import { useEffect } from "react"

type HandleFnType = (event?:MouseEvent | TouchEvent) => void;

export default function useOutsideClick<T extends HTMLElement>(ref:React.RefObject<T | null>, handleFn:HandleFnType){
    useEffect(()=>{

        function listener(event:MouseEvent|TouchEvent){
            if(!ref.current || ref.current.contains(event.target as Node)) return;
            handleFn(event);
        }

       
        document.addEventListener("mousedown",listener);
        document.addEventListener("touchstart",listener);

        return ()=>{
            document.removeEventListener("mousedown",listener);
            document.removeEventListener("touchstart",listener);
        }
    },[ref,handleFn]);
}