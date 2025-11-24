import { createSlice } from "@reduxjs/toolkit";
type User = {
_id: string; 
username: string;
password: string;
lastName: string;
firstName: string;
email: string;
role: string;
};
const initialState = {
  currentUser: null,
} as {currentUser: User | null};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;