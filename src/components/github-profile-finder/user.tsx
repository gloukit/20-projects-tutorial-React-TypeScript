import "./styles.css";

interface User {
    avatar_url:string;
    followers:number;
    following:number;
    public_repos:number;
    name:string;
    login:string;
    created_at:string;
}

interface UserProps {
  user: User;  //props对象应该长这样：{ user: { avatar_url: string; followers: number; ... } } ,所以还要再包一层 user
}

export default function User({user}:UserProps){
    const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  function joinDate(){
    const createdDate = new Date(created_at);
    const day = createdDate.getDate();
    const month = createdDate.toLocaleString("en-us",{month:"short"});
    const year = createdDate.getFullYear();
    return `${day} ${month}, ${year} `
  }

    return (
        <div className="user">
            <div className="image">
                <img src={avatar_url} alt="User" />
            </div>

            <div className="name-container">
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User joined on : {joinDate()}</p>
            </div>

            <div className="profile-info">
                <p>Public Repos :  
                    <span>{public_repos}</span>
                </p>

                <p>Followers : 
                    <span>{followers}</span>
                </p>

                <p>Following : 
                    <span>{following}</span>
                </p>
            </div>

        </div>
    )
}