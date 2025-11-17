import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/[cid]/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Dashboard/reducer";

import accountReducer from "./Account/reducer";

const store = configureStore({
 reducer: { coursesReducer, modulesReducer, accountReducer, assignmentsReducer, enrollmentsReducer},
});
export type RootState = ReturnType<typeof store.getState>;
export default store;