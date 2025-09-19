import "./styles.css";


type PropsType = {
    handleClick:(event:React.MouseEvent<HTMLLIElement, MouseEvent>)=>void;
    data:string[];
}

export default function Suggestions({handleClick,data}:PropsType){
    return (
        <ul>
            {data.map((item:string,index:number)=>(
                <li key={index} onClick={handleClick} className="option">
                    {item}
                </li>
            ))}
        </ul>
    )
}