import useFetch from "../use-fetch";
import { useRef } from "react";

interface ProductType{
    id:number;
    title:string;
}
type DataType = {
    products:ProductType[]
}

export default function ScrollToTopAndBottom(){
    const {data,pending,error} = useFetch<DataType | null>("https://dummyjson.com/products?limit=100");

    function scrollToTop(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

    const buttomRef = useRef<HTMLDivElement|null>(null);

    function scrollToButtom(){
        buttomRef.current?.scrollIntoView({behavior:"smooth"});
    }


    if (error) {
        return <h1>Error occured ! Please try again.</h1>;
    }
    if (pending) {
        return <h1>Loading ! Please wait</h1>;
    }

    return (
        <div>
            <h1>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={scrollToButtom}>Scroll to buttom</button>

            <ul>
                {data && data.products && data.products.length
                    ? data.products.map((item)=>(<li>{item.title}</li>
                )):null}
            </ul>
            
            <button onClick={scrollToTop}>Scroll to top</button>
            <div ref={buttomRef}>
                <h3>This is the bottom of the page</h3>
            </div>
        </div>
    )
}