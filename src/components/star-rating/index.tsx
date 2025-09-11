import React from "react";
import "./styles.css";
import {Star} from "lucide-react";


interface ObjType {
    numOfStars:number;
}

export default function StarRating ({numOfStars}:ObjType){
    const [rating,setRating] = React.useState<number>(0);
    const [hovering,setHovering] = React.useState<number>(0);

    const current = hovering || rating; //确立边界，注意必须hovering在先，才能确保星星会一直有hover的效果

    function handleClick(index:number){
        setRating(index);
    }

    function handleMouseMove(index:number){
        setHovering(index); //星星跟随鼠标移动轨迹而点亮
    }

    function handleMouseLeave(){
        setHovering(rating); //将hovering也恢复为固定评分rating
    }   

    return (
        <div className="star-rating">
            {
                Array.from({length:numOfStars},(_,index)=>{
                    index +=1 ;

                    return <Star key={index}
                                 onClick={()=>handleClick(index)}
                                 onMouseMove={()=>handleMouseMove(index)}
                                 onMouseLeave={handleMouseLeave}
                                 size={40}
                                 className={index<=current?"light":"invisible"}
                            />
                })
            }
        </div>
    )
}