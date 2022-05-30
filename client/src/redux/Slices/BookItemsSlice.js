import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_USER } from "../../constant";
import * as api from "../../config/apiBackEnd";

export const bookItems = createSlice({
  name: "bookItems",
  initialState: {
    book: {
      name: "",
      description: "",
      price: "",
      author: "",
      seller: "",
      image: "",
    },
    loading: false,
    error: false,
    createBookState: null,
  },
  reducers: {
    setCreateBookState: (state) => {
      state.createBookState = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBookItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createBookItem.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.status === "Fail") {
          state.createBookState = false;
        } else {
          state.name = action.payload.data.product.name;
          state.description = action.payload.data.product.description;
          state.price = action.payload.data.product.price;
          state.author = action.payload.data.product.author;
          state.seller = action.payload.data.product.seller;
          state.image = action.payload.data.product.image;
          state.createBookState = true;
          console.log("Create book Success");
        }
      })
      .addCase(createBookItem.rejected, (state, action) => {});
  },
});

const { reducer, actions } = bookItems;
export default reducer;
export const { setCreateBookState } = actions;

//Register
export const createBookItem = createAsyncThunk(
  "bookItems/createBookItem",
  async (data) => {
    let formData = new FormData();
    formData.append("name", data.nameBook);
    formData.append("author", data.nameAuthor);
    formData.append("description", data.bookContent);
    formData.append("price", data.price);
    formData.append("image", data.imageFileBook);
    const TOKEN = localStorage.getItem(TOKEN_USER);
    const res = await fetch(`${api.pathProducts}/create`, {
      body: formData,
      headers: { authorization: `Bearer ${TOKEN}` },
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return res;
  }
);
