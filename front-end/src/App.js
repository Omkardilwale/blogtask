import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import WebsitePortal from "./components/WebsitePortal";
import Content from "./components/Content";
import Blogpage from "./components/AddNewBlog";
import "bootstrap/dist/css/bootstrap.min.css"
import Update from "./components/Update";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Home" element={<WebsitePortal />}/>
        <Route path="/content" element={<Content />}/>
        <Route path="/addNewBlog" element={<Blogpage/>}>
        {/* <Route path="/update" element={<Update/>}> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
