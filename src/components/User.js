import { useState } from "react";

function User(){
    // const [firstName,setFirstName] = useState('Usman')
    // const [lastName,setlastName] = useState('Shabbir')

    // function updateUser(){
    //     setFirstName('USM')
    //     setlastName('SHA')
    // }

    const [user,setUser] = useState({firstName:"usman", lastName:"shabbir"})

    function updateUser(){
        setUser({firstName:"USM",lastName:"SHA"})
    }

    return(
        <div>
            <h1>User</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User