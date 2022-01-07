import constants from "../constants";

const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.setProjects:
      return action.payload;
    default:
      return state;
  }
};

export default projectsReducer;
