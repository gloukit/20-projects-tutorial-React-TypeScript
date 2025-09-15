import {useState,useEffect} from "react";
import "./styles.css";

type PropsType = {
    url:string;
}

type ProductType = {
    id:number;
    title:string;
}

export default function ScrollIndicator({url}:PropsType){
    const [loading,setLoading] = useState<boolean>(false);
    const [errorMsg,setErrorMsg] = useState("");
    const [data,setData]=useState<ProductType[]>([]);
    const [percentage,setPercentage] = useState<number>(0);

    //fetch获取数据
    async function fetchData(url:string){
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if(data && data.products && data.products.length>0){
                setData(data.products);
                setLoading(false);
            }
        } catch (error:unknown) {
            if(error instanceof Error){
                setErrorMsg(error.message)
            }else{
                setErrorMsg(String(error));
            }
        }
    }

    useEffect(()=>{
        fetchData(url);
    },[url])

    //计算进度条百分比
    function handleScrollPercentage(){
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setPercentage((howMuchScrolled/height)*100);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPercentage);

        return ()=>{
            window.removeEventListener("scroll",handleScrollPercentage);
        }
    },[]);


    if(loading){
        return <div>Loading data! Please wait...</div>;
    }

    if(errorMsg){
        return <div>Error!{errorMsg}</div>;
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width:`${percentage}%`}}></div>
                </div>
            </div>

            <div className="data-container">
                {data && data.length>0
                    ?data.map((item)=>(<p>{item.title}</p>)):null}
            </div>
        </div>
    )
}