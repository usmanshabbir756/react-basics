import React from "react";
class Employee extends React.Component{
    constructor(props){
        super(props)

        this.state={
            firstName:"Usman",
            lastName:"Shabir"
        }
    }

    updateEmployee(){
        this.setState({
            firstName:"Us",
            lastName:"Sh"
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <button onClick={()=>this.updateEmployee()}>Update</button>
            </div>
        )
    }
}


export default Employee;