export function FirstComponent(){
    return <button className="first" onClick={handelClick}>click</button>
}

export function SecondComponent(){
    return <h1>second comonent</h1>
}

export default function MyComponent(){
    return <h1>my component</h1>
}

function handelClick(){
    alert('cliked');
}