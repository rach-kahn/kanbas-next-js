import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wer: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setWer: (state, action) => {
      state.wer = action.payload;
    },
  },
});
export const { setWer } = accountSlice.actions;
export default accountSlice.reducer;