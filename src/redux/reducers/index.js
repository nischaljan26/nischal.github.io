import { combineReducers } from "redux";
import experienceReducer from "./experienceReducer";
import socialIconsReducer from "./socialIconsReducer";
import educationReducer from "./educationReducer";
import skillsReducer from "./skillsReducer";
import projectsReducer from "./projectsReducer";
// import alertsReducer from "./alerts";

const allReducers = combineReducers({
  social_icons: socialIconsReducer,
  experience: experienceReducer,
  education: educationReducer,
  skills: skillsReducer,
  projects: projectsReducer,
});

export default allReducers;
