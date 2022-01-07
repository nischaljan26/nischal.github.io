import constants from "../constants";

const experienceReducer = (state = [], action) => {
  switch (action.type) {
    case constants.setEducation:
      return action.payload;
    default:
      return state;
  }
};

export default experienceReducer;
