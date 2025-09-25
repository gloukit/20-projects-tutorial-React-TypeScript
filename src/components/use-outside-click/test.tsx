import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function OutsideClickTest(){
    const ref = useRef<HTMLDivElement|null>(null);
    const [showContent,setShowContent] = useState<boolean>(false);

    useOutsideClick(ref,()=>setShowContent(false));

    console.log(ref)

    return (
        <div>
            {showContent?(
                <div ref={ref}>
                    <h1>This is a random content</h1>
                    <p>Please click outside of this to close this. It won't close if you
                    click inside of this content.</p>
                </div>
            ):(
                <button onClick={()=>setShowContent(true)}>Show Content</button>
            )

            }

        </div>
    )
}