
// import React, { useState } from 'react';
// import { NavLink,useNavigate } from 'react-router-dom'


// export default function Login() {
//     let history = useNavigate();

//     const [newobject, setnewobject] = useState({title:"",body:""})


//     function handlechange(e){
//         // console.log(e.target.value);
//         // console.log(e.target.name);
//             setnewobject({...newobject,[e.target.name]:e.target.value})
//             // console.log(newobject)
//     }


// async function handlesubmit(e){
//         e.preventDefault();
//     //console.log(newobject)
//     let f=false
//     for (let field in newobject){
//         if (! newobject[field]){
//             alert("plese fill all fields")
//             f=true
//             break
//         }
//     }
//     if (f){
//         return}
        


// const response= async(id)=> { await fetch(`http://localhost:8000/api/blogs/${id}`, {
//   method: 'PUT',
//   body: JSON.stringify(newobject),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// }



//     const data= await response.json()

//         console.log(data)

//         if (data.success){
//             localStorage.setItem('token',data.authtoken)
//             localStorage.setItem('namee',data.name)
//             localStorage.setItem('user',JSON.stringify(newobject))
            
//             // alert("rigisterd successfully")

//             history("/content")
            
//         }else{
//             console.log(data)
//             alert(data.error)
//         }
            
//     }

//     return (
//         <>
//         </>
//         )
// }