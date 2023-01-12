import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorF = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, [navigate]);

  return <h1>Error 404</h1>;
};

export default ErrorF;
