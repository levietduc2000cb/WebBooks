export const pathAuth =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api/v1/auth"
    : "https://shrouded-garden-58771.herokuapp.com/api/v1/auth";
export const pathProducts =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api/v1/products"
    : "https://shrouded-garden-58771.herokuapp.com/api/v1/products";
//http://localhost:5000/api/v1/auth
//http://localhost:5000/api/v1/products
