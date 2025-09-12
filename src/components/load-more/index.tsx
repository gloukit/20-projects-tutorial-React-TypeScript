import React from "react";
import "./styles.css";

type ProductProp = {
    id:number;
    title:string;
    thumbnail:string;
}

export default function LoadMore(){
    const [productsData,setProductsData]=React.useState<ProductProp[]>([]);
    const [countClick,setCountClick] = React.useState<number>(0);
    const [disabledBtn,setDisabledBtn] =  React.useState<boolean>(false);

    const [loading,setLoading] = React.useState<boolean>(false);
    const [errorMsg,setErrorMsg] =  React.useState<string | null>(null);

    async function fetchData (){
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=6&skip=${countClick*6}`);
            const data = await response.json();

            if(data && data.products && data.products.length){
                setProductsData((prevData)=>[...prevData,...data.products]); //追加数据，而非覆盖数据
                setLoading(false);
            }
        } catch (e:unknown) {
            if(e instanceof Error){
                setErrorMsg(e.message);
            } else {
                setErrorMsg(String(e));
                setLoading(false);
            }
        }
    }

    //【点击 fetch 数据】
    React.useEffect(()=>{
        fetchData();
    },[countClick]);

    //【设置边界，当数据量达到一定长度，loadmore按钮失效】
    React.useEffect(()=>{
        if(productsData.length===30) {
            setDisabledBtn(true);
        }
    },[productsData]);


    if(loading){
        return <div className="loading">Loading data! Please wait.</div>
    }

    if(errorMsg){
        return <div className="error-msg">Something gets wrong.${errorMsg}</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {productsData && productsData.length
                 ? productsData.map((item)=>(
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                 ))
                  :null }
            </div>

            <div className="button-container">
                <button onClick={()=>{setCountClick(prev=>prev+1)}} 
                        disabled={disabledBtn}
                        className="load-more-btn">
                    Load More Products...
                </button>
                {disabledBtn && <p>You have reached to 30 products...</p>}
            </div>
        </div>
    )
}