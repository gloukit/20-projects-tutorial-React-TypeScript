import Suggestions from "./suggestions";
import React, { useEffect, useState } from "react";
import "./styles.css";

interface UserType {
    firstName:string;
}

export default function SearchAutocomplete(){
    const [looading,setLoading]=useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    const [users,setUsers] = useState<string[]>([]);
    const [filteredUsers,setFilteredUsers] = useState<string[]>([]);
    const [showDropdown,setShowDropdown] = useState<boolean>(false);
    const [searchParam,setSearchParam] = useState<string>("");

    /*组件初次挂载，即fetch数据，并保存*/
    async function fetchUsers(){
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if(data && data.users && data.users.length){
                setUsers(data.users.map((item:UserType)=>item.firstName)); 
                setLoading(false);
                setError(null);
            }
        } catch (error:unknown) {
            if(error instanceof Error){
                setLoading(false);
                setError(error.message);
            }else{
                setError(String(error));
            }
        }
    }
    useEffect(()=>{fetchUsers()},[]);

    /*管理输入框，包括：实时显示、获取匹配结果*/
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if(query.length>1){
            const filteredData = users && users.length
                                ? users.filter(item=>item.toLowerCase().indexOf(query)>-1)
                                :[];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    /*管理点击事件：点击获取值并填充到搜索框中*/
    function handleClick(event:React.MouseEvent<HTMLLIElement, MouseEvent>){
        setSearchParam(event.currentTarget.innerText);
        setShowDropdown(false);
        setFilteredUsers([]);
    }

    return (
        <div className="search-autocomplete">
            <input type="text" 
                   className="search"
                   value={searchParam}
                   onChange={handleChange}
             />

            {showDropdown &&
             <Suggestions handleClick={handleClick} data={filteredUsers}/>
            }
        </div>
    )
}