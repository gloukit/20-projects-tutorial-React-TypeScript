import useFetch from ".";

type Product = {
    id:number;
    title:string;
}
type DataType = {
    products:Product[];
}

export default function UseFetchTest(){
    const {data,pending,error} = useFetch<DataType>( "https://dummyjson.com/products");

    return (
        <div>
            <h1>Use Fetch Hook</h1>
            {pending?<h3>Pending ! Please wait</h3>:null}
            {error?<h3>{error}</h3>:null}
            {data && data.products && data.products.length ?
                data.products.map((item:Product)=>(
                    <p key={item.id}>{item.title}</p>
                )) :null }
        </div>
    )
}