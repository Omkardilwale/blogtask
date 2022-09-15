
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom'


export default function Login() {
    let history = useNavigate();

    const [newobject, setnewobject] = useState({title:"",body:"",image:""})


    function handlechange(e){
        // console.log(e.target.value);
        // console.log(e.target.name);
            setnewobject({...newobject,[e.target.name]:e.target.value})
            // console.log(newobject)
    }


async function handlesubmit(e){
        e.preventDefault();
    //console.log(newobject)
    let f=false
    for (let field in newobject){
        if (! newobject[field]){
            alert("plese fill all fields")
            f=true
            break
        }
    }
    if (f){
        return}
        


const response=  await fetch("http://localhost:8000/api/blogs", {
  method: 'POST',
  body: JSON.stringify(newobject),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

    const data= async()=>{await response.json()

        console.log(data)

        if (data.success){
            localStorage.setItem('token',data.authtoken)
            localStorage.setItem('namee',data.name)
            localStorage.setItem('user',JSON.stringify(newobject))
            
            await alert("rigisterd successfully")

            history("/content")
            
        }else{
            console.log(data)
            alert(data.error)
        }
            
    }}

    return (
              <div className="Auth-form-container">
                <form action="" onSubmit={handlesubmit} className="Auth-form">
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Add Blog</h3>
                    <div className="text-center">
                      Want to Go Back?{" "}
                      <NavLink className="li" to={"/content"} ><button className='btn btn-primary'>Back</button></NavLink>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text" id='Email/phone'onChange={handlechange} name="title"
                        className="form-control mt-1"
                        placeholder="Enter title"
                      />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="body">Discription</label>
                      <textarea
                        type="text" id='password'onChange={handlechange} name="body"
                        className="form-control"
                        placeholder="Enter Body"
                      />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="image">Image</label>
                      <input
                        type="text" id='image'onChange={handlechange} name="image"
                        className="form-control mt-1"
                        placeholder="Enter image"
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )
}

















