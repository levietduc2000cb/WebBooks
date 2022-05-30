import { configureStore } from "@reduxjs/toolkit";
import { default as Authreducer } from "./Slices/AuthSlice";
import { default as BookItemsreducer } from "./Slices/BookItemsSlice";
import { default as CartItemsreducer } from "./Slices/CartItems";
const rootReducer = {
  AuthReducer: Authreducer,
  BookItemsReducer: BookItemsreducer,
  CartItemsReducer: CartItemsreducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
