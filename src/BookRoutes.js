import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
import ProductMenu from "./ProductMenu";

const BookRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<ProductMenu />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductsList />}></Route>
          <Route path="new" element={<NewProduct />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default BookRoutes;
