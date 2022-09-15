import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'


function Navbar() {
    const navigate = useNavigate();
    const addNewBlog = () => {
        navigate('/addNewBlog');
    };
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">HACK-X BLOGS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <button className='btn btn-primary' onClick={addNewBlog}>Add Blog</button>
                <NavLink className="li" to={"/"} ><button className='btn btn-primary'>Logout</button></NavLink>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar;