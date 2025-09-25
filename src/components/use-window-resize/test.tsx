import useWindowResize from "."

export default function WindowSizesTest(){
    const windowSize = useWindowResize();
    const {width,height} = windowSize;

    return (
        <div>
            <h1>Use Window resize Hook</h1>
            <p>Width is <span style={{color:"red"}}>{width}</span></p>
            <p>Height is <span style={{color:"red"}}>{height}</span></p>
        </div>
    )
}