import { useEffect, useState } from "react"

export default function useFetch<T>(url:string,options:RequestInit={}){
    const [data,setData] = useState<T | null>(null);
    const [pending,setPending] = useState<boolean>(false);
    const [error,setError] = useState<string | null>("");

    async function fetchData(){
        setPending(true);
        try {
            const response = await fetch(url,{...options});
            if(!response.ok) throw new Error(response.statusText);
            console.log(response);
            const result : T = await response.json();
            setData(result);

            setError(null);
            setPending(false);
        } catch (e) {
            setError((e as Error).message);
            setPending(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url])

    return {data,pending,error} ;
}