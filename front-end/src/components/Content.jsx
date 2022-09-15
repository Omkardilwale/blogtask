import {React,useEffect,useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';

const Content=() =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
      deletepost();
    }, []);

    const fetchProducts = async() => {
      await axios
        .get('http://localhost:8000/api/blogs')
        .then((res) => {
          console.log(res);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    const navigate = useNavigate();

    useEffect(() => {
      let user=localStorage.getItem('token')
      if(!user){
        navigate("/")}
   }, );


   const deletepost = async(id) => {
    await axios
      .delete(`http://localhost:8000/api/blogs/${id}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
        navigate("/content")
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  }
   
  function refresh(){
    window.location.reload(false);
  }
      
  return (
    <>
    <Navbar/>
    <div class="row row-cols-1 row-cols-md-3 g-4">
    {products.map((product) => (
      <div class="col">
        <div class="card h-100" key={product._id}>
          <img src={product.image} class="card-img-top"
            alt="Skyscrapers" />
          <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">
            {product.body}  
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{product.createdAt}</small>
          </div>
          <div className="btns" style={{display:"flex"}}>
          <NavLink className="li" to={"/update"} ><button className='btn btn-primary'>Update</button></NavLink>
          <button className='btn btn-primary' onClick={()=>deletepost(product._id)}>Delete</button>
          </div>
        </div>
      </div>
      ))}
  </div>
    
    </>
  )
}

export default Content;