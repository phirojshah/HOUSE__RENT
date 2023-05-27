import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Roomdescription from "./Components/Roomdescription";
import Blogs from "./Components/Blogs";
import Properties from "./Components/Properties";
import Reset from "./Components/Reset";
import UploadImage from "./Components/UploadImage";
import Reeset from "./Components/Reeset";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import CategoryProduct from "./pages/CategoryProduct";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import AdminProperties from "./admin/Pages/AdminProperties";
import Users from "./admin/Pages/Users";
import Dashboard from "./admin/Pages/Dashboard";
import Profile from "./Components/Profile";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Roomdescription" element={<Roomdescription />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Reset" element={<Reset />} />
        <Route path="/upload" element={<UploadImage />} />
        <Route path="/reeset" element={<Reeset />} />
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product" element={<Products />} />
        <Route path="/update-product/:slug" element={<UpdateProduct />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admindashboard" element={<Dashboard />} />
        <Route path="/adminusers" element={<Users />} />
        <Route path="/adminproperties" element={<AdminProperties />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
