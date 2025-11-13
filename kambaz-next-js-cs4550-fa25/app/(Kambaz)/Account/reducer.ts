import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: {username: 'qwe', password: 'wer'},
  message: "Hello World !!!"
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    }
  },
});
export const { setCurrentUser, setMessage } = accountSlice.actions;
export default accountSlice.reducer;