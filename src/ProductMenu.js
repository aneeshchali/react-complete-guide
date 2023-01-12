import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const ProductMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <div>
      <Link to="/Products/1">Products 1</Link>
      <br />
      <Link to="/Products/2">Products 2</Link>
      <br />
      <Link to={`/Products/${number}`}>Products {number}</Link>
      <br />
      <Link to="/Products/new">New Product</Link>
      <Outlet context={{ hello: "world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      ></input>
    </div>
  );
};

export default ProductMenu;
