import { combineReducers } from "redux";
import experienceReducer from "./experieneReducer";
// import alertsReducer from "./alerts";

const allReducers = combineReducers({
  experience: experienceReducer,
  // alerts: alertsReducer,
});

export default allReducers;
