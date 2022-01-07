import constants from "../constants";

const socialIconsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.setSocialIcons:
      return action.payload;
    default:
      return state;
  }
};

export default socialIconsReducer;
