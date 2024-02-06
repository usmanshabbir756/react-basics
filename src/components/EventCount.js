import { useState } from "react"

const EventCount =()=>{
    const [count,setCount] = useState(0);

    function incrementCount(){
        setCount(count + 1)
    }

    function countReset(){
        setCount(0)
    }

    return(
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={countReset}>Reset</button>
        </div>
    )
}
export default EventCount