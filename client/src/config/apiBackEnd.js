export const pathAuth =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api/v1/auth"
    : "https://nameless-journey-21291.herokuapp.com/api/v1/auth";
export const pathProducts =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api/v1/products"
    : "https://nameless-journey-21291.herokuapp.com/api/v1/products";
