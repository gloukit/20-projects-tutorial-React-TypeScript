import { useRef } from "react";

export default function ScrollToSection(){
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScroll(){
    if(ref.current){
      const position = ref.current.getBoundingClientRect().top;
      window.scrollTo({
        top:position,
        behavior:"smooth"
      })
    }
  }

    return (
        <div>
            <h1>Scroll to a paticular section</h1>
            <button onClick={handleScroll}>Click to scroll</button>
            {data.map((item,index)=>(
                <div ref={index===2?ref:null} style={item.style}>
                    <h3>{item.label}</h3>
                </div>
            ))}
        </div>
    )
}