import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],   
  showAll: false,    
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments(state, action) {
      state.enrollments = action.payload;
    },
    toggleShowAll(state) {
      state.showAll = !state.showAll;
    }
  }
});

export const { setEnrollments, toggleShowAll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
//comment to try redeploying on vercel