import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getAllProducts();
    } else {
      navigate("/Login");
    }
  }, []);
  return (
    <div>
      <p className="d-flex flex-row-reverse m-xl-4">
        <Link
          to={`http://localhost:3000/create-product`}
          className="text-decoration-none"
        >
          {localStorage.getItem("User") === "Admin" ? (
            <button type="submit" className="btn btn-primary ml-5 ">
              Create-Properties
            </button>
          ) : (
            <button type="submit" className="btn btn-primary d-none"></button>
          )}
        </Link>
      </p>

      <div className=" row">
        <div className="col-sm-2 mb-4">{/* <AdminMenu /> */}</div>
        <div className="col-md-9 mb-4">
          <h1 className="text-center">All Properties List</h1>

          <div className="d-flex flex-wrap ">
            {products?.map((p) => (
              <div className="object-fit-fill border rounded m-lg-2">
                <div className="card m-1" style={{ width: "18rem" }}>
                  <img
                    src={`http://localhost:5000/api/product/product-photo/${p._id}`}
                    className="card-img-top"
                    style={{ height: "18rem" }}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description.substring(0, 30)}...
                    </p>
                    <Link
                      key={p._id}
                      to={`/update-product/${p.slug}`}
                      // className="product-link"
                      // class="btn btn-primary"
                    >
                      {localStorage.getItem("User") === "Admin" ? (
                        <button type="submit" className="btn btn-primary ml-5 ">
                          Edit Details
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary d-none"
                        ></button>
                      )}
                    </Link>
                    <button
                      className="btn btn-primary ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
