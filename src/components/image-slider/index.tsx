import React from "react";
import "./styles.css"
import { CircleArrowLeft,CircleArrowRight,Circle } from 'lucide-react';

type UrlType = {
    url:string;
    page?:number;
    limit?:number;
}

type ImagesType = {
    id:number;
    download_url:string;
}

export default function ImageSlider({url,page,limit}:UrlType){
    const [imagesData,setImagesData]= React.useState<ImagesType[]>([]);
    const [errorMsg,setErrorMsg] = React.useState<string|null>(null);
    const [loading,setLoading] = React.useState(false);
    const [currentSlide,setCurrentSlide] = React.useState<number>(0);
    const timerRef = React.useRef<NodeJS.Timeout>(null);

    //【使用fetch异步函数获取API数据】
    async function fetchData(url:string){
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            
            if(data){
                setImagesData(data);
                setLoading(false);
            }
        } catch(e:unknown) {
            if (e instanceof Error) {
                    setErrorMsg(e.message);
                } else {
                    setErrorMsg(String(e));
                }
            setLoading(false);
        }
    }
    
    //【设置“上一张/下一张”的点击事件函数】
    function handlePrevious(){
        setCurrentSlide(currentSlide === 0 ? imagesData.length - 1 : currentSlide - 1);
    }
    function handleNext(){
        setCurrentSlide(currentSlide===imagesData.length-1? 0 : currentSlide+1);
    }

    //【获取API数据，当网址产生变化时，则重新获取数据重新渲染】
    React.useEffect(()=>{
        if(url!=="") fetchData(url);
    },[url,page,limit]);

    //【设置定时器，每隔一秒更新一次currentSlide，以切换图片】
    React.useEffect(()=>{
        if(timerRef.current){ //先清除旧的定时器
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(()=>{
            setCurrentSlide(prev=>(prev===imagesData.length-1?0:prev+1));
        },2000)

        return ()=>{ //卸载时清理定时器
            if(timerRef.current)clearTimeout(timerRef.current);
        };
    },[currentSlide,imagesData]);


    //【以下为条件渲染，满足哪个条件则渲染对应的组件】
    if(loading){
        return <div className="loading">Loading data! Please wait</div>
    }
    if(errorMsg!==null){
        return <div className="error-msg">Error occured!{errorMsg}</div>
    }

    return (
        <div className="container">
            <CircleArrowLeft onClick={handlePrevious} className="arrow arrow-left"/>

            { /*当获取到了图片数据，则渲染图片…………*/
              imagesData && imagesData.length
                ? imagesData.map((image,index)=>(
                    <img key={image.id} 
                        src={image.download_url}
                        className={index===currentSlide ? "current-img":"current-img hide-current-img"} 
                        //据此隐藏掉不等于当前currentSlide的其他图片
                    />
            )) : null}

             <CircleArrowRight onClick={handleNext} className="arrow arrow-right"/>

            <span className="circle-indicators">
                {/* 动态渲染代表index的小圆点………… */
                    imagesData && imagesData.length
                    ? imagesData.map((_,index)=>(
                        <button key={index}
                                onClick={()=>setCurrentSlide(index)}
                                className={index===currentSlide?"current-indicator":"current-indicator inactive-indicator"}
                        ></button>
                    )):null
                }
            </span>

        </div>
    )
}