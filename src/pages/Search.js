import React from "react";
// import Layout from "./../components/Layout/Layout";
import { useSearch } from "../Components/context/search";
import { useNavigate } from "react-router";
const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  return (
    <div title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Properties Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="object-fit-fill border rounded m-lg-2">
                <div className="card m-2" style={{ width: "18rem" }}>
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
                    <p className="card-text"> {p.price}</p>
                    <button
                      class="btn btn-primary ms-1"
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
    </div>
  );
};

export default Search;
