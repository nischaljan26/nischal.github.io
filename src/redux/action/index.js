import constants from "../constants";

export const set_experience = (data) => {
  return {
    type: constants.setExperience,
    payload: data,
  };
};

export const set_social_icons = (data) => {
  return {
    type: constants.setSocialIcons,
    payload: data,
  };
};

export const set_education = (data) => {
  return {
    type: constants.setEducation,
    payload: data,
  };
};
export const set_skills = (data) => {
  return {
    type: constants.setSkills,
    payload: data,
  };
};
export const set_projects = (data) => {
  return {
    type: constants.setProjects,
    payload: data,
  };
};
