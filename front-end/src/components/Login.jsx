
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom'


export default function Login() {
    let history = useNavigate();

    const [newobject, setnewobject] = useState({email:"",password:""})
    const [islock, setislock] = useState(false);


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
        

const response= async()=>{ await fetch("http://localhost:8000/login", {
  method: 'POST',
  body: JSON.stringify(newobject),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

    const data= await response.json()

        console.log(data)

        if (data.success){
            localStorage.setItem('token',data.authtoken)
            localStorage.setItem('namee',data.name)
            localStorage.setItem('user',JSON.stringify(newobject))
            
            // alert("rigisterd successfully")

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
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                      Not registered yet?{" "}
                      <NavLink className="li" to={"/register"} ><button className='btn btn-primary'>Register</button></NavLink>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Email/phone">Email address</label>
                      <input
                        type="text" id='Email/phone'onChange={handlechange} name="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Password</label>
                      <input
                        type={!islock?  "password":""} id='password'onChange={handlechange} name="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                      />
                      <i className='fa fa-eye'  onClick={()=>{setislock(!islock)}}> </i>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    <p className="text-center mt-2">
                      Forgot <a href="#">password?</a>
                    </p>
                  </div>
                </form>
              </div>
            )
}

















