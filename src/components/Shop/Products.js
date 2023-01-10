import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const productsList = [
  { id: "1", title: "apple", price: 12, description: "this is just an apple" },
  { id: "2", title: "mango", price: 10, description: "this is just a mango" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList.map((val) => {
          return (
            <ProductItem
              key={val.id}
              id={val.id}
              title={val.title}
              price={val.price}
              description={val.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
