
// // PARAMMETER destructuring 
// const Student=({firstName,lastName}) => {
//     return(
//         <div>
//             <h1>student first name : {firstName}</h1>
//             <h1>student last name : {lastName}</h1>
//         </div>
//     )
// }

// body destructuring 
const Student=(props) => {
    const {firstName,lastName} = props;
    return(
        <div>
            <h1>student first name : {firstName}</h1>
            <h1>student last name : {lastName}</h1>
        </div>
    )
}

// object 
// const Student=(props) => {
//     return(
//         <div>
//             <h1>student first name : {props.student.firstName}</h1>
//             <h1>student last name : {props.student.lastName}</h1>
//         </div>
//     )
// }

//array
// const Student=(props) => {
//     return(
//         <div>
//             <h1>Skills : {props.data}</h1>
//         </div>
//     )
// }



export default Student;