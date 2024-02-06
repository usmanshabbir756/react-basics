import { useState } from "react"

const Login = () => {
    const [isLogIn,setIsLogIn] = useState(false)
    let message;
    // if(isLogIn){
    //     message=<p>Login</p>;
    // }
    // else{
    //     message = <p>not login</p>
    // }

    function updateLogin(){
        setIsLogIn(true)
    }

    // message = isLogIn ? <p>Login</p> : <p>not login</p>;



    return (
        <div>
            {/* {message} */}

            {/* short circuit */}
            {isLogIn && <p>Login</p>}
            
            <button onClick={updateLogin}>LogIn</button>
        </div>
    )
}

export default Login