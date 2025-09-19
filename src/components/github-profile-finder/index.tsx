import { useEffect, useState } from "react";
import "./styles.css";
import User from "./user";

interface User {
    avatar_url:string;
    followers:number;
    following:number;
    public_repos:number;
    name:string;
    login:string;
    created_at:string;
}

//相比原教程，改进了以下内容：
//1、fetch数据的执行流程——依赖userName触发fetch请求，handleSumbit只管更新状态变量
//2、拆分状态管理：让searchInput专门管理输入框，userName只管提交的搜索关键字
//3、处理输入无效的情况，排除fetch返回的错误对象，并在页面显示错误信息
export default function GithubProfileFinder(){
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");
    const [userData,setUserData]= useState<User | null>(null);
    const [userName,setUserName] = useState<string>("");
    const [searchInput,setSearchInput] = useState<string>("");


    async function fetchUserData (name:string) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${name}`);
            const data = await response.json();

            //GitHub 返回的错误对象也要排除
            if(data.message === "Not Found"){
                setUserData(null);
                setError("User not found");
                setLoading(false);
                return;
            }

            if(data){
                setUserData(data);
                setError("");
                setLoading(false);
            }

        } catch (error) {
            setUserData(null);
            setError("Something went wrong");
            setLoading(false);
        }
    }
    
    useEffect(()=>{
        if(!userName) return;
        fetchUserData(userName);
    },[userName]);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!searchInput.trim()){
            alert("Please enter a username!")
            return;
        }
        setUserName(searchInput);
        setSearchInput("");
    }

    console.log(userData);

    return (
        <div className="profile-container">
            <form onSubmit={handleSubmit} className="input-wrapper">
                <input type="text" 
                       value={searchInput}
                       onChange={(e)=>{setSearchInput(e.target.value)}}
                       name="search-by-username"
                       placeholder="Search Github Username..."
                />
                <button>Search</button>
            </form>
            {loading && <h1>Loading data! Please wait...</h1>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {userData && <User user={userData}/>}
        </div>

    )
} 