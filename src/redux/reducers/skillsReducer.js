import constants from "../constants";

const skillsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.setSkills:
      return action.payload;
    default:
      return state;
  }
};

export default skillsReducer;
