import { combineReducers } from "redux";
import TabReducer from "./TabReducer";
import ActiveTab from "./ActiveTab";

const rootReducer = combineReducers({
  tabs: TabReducer,
  activeTab: ActiveTab
});

export default rootReducer;
