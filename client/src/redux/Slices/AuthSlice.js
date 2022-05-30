import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TOKEN_USER, CART_ITEMS } from "../../constant";
import * as api from "../../config/apiBackEnd";

export const auth = createSlice({
  name: "auth",
  initialState: {
    myuser: {
      avatar: "",
      userName: "",
    },
    loading: false,
    error: false,
    messenger: null,
    currentUser: false,
  },
  reducers: {
    resetUser: (state) => {
      state.myuser.avatar = "";
      state.myuser.userName = "";
      state.currentUser = false;
      localStorage.removeItem(TOKEN_USER);
      localStorage.removeItem(CART_ITEMS);
    },
    setErrorDefault: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.data.user === null) {
          state.myuser.avatar = "";
          state.myuser.userName = "";
          state.currentUser = false;
          localStorage.removeItem(TOKEN_USER);
        } else {
          state.myuser.userName = action.payload.data.user.userName;
          state.myuser.avatar = action.payload.data.user.avatar;
          state.currentUser = true;
        }
      })
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.status === "Fail") {
          state.error = true;
        } else {
          state.myuser.userName = action.payload.data.userName;
          state.myuser.avatar = action.payload.data.avatar;
          state.currentUser = true;
          localStorage.setItem(TOKEN_USER, action.payload.data.token);
        }
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.status === "Fail") {
          state.error = true;
        } else {
          state.myuser.userName = action.payload.data.userName;
          state.myuser.avatar = action.payload.data.avatar;
          state.currentUser = true;
          localStorage.setItem(TOKEN_USER, action.payload.data.token);
        }
      });
  },
});

const { reducer, actions } = auth;
export default reducer;
export const { resetUser, setErrorDefault } = actions;

//Login mặc định
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  const res = await fetch(api.pathAuth, {
    headers: { authorization: `Bearer ${localStorage.getItem(TOKEN_USER)}` },
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return res;
});

//Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data) => {
    let formData = new FormData();
    formData.append("name", data.fullname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.fileAvatar);
    const res = await fetch(`${api.pathAuth}/register`, {
      body: formData,
      method: "post",
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
    return res;
  }
);

//Login
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
  const res = await fetch(`${api.pathAuth}/login`, {
    body: JSON.stringify({ email: data.email, password: data.password }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return res;
});
