import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/[cid]/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import accountReducer from "./Account/reducer";
import qweReducer from "./Account/qwe"

const store = configureStore({
 reducer: { coursesReducer, modulesReducer, accountReducer, assignmentsReducer, qweReducer},
});
export default store;