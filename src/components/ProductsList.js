import React from "react";
import { useOutletContext, useParams } from "react-router";

const ProductsList = () => {

const obj = useOutletContext()
  const { id } = useParams();
  return (
    <>
    <h1>product {id}</h1>
    <h1>CONTEXT PASSED {obj.hello}</h1>
    </>
  )
};

export default ProductsList;
