import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAll: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser, setAll } = userSlice.actions;

export default userSlice.reducer;
