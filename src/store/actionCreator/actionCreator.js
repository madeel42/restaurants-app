import * as allAction from "../actions/allActions";
export const dataAction = (data) => {
  return {
    type: allAction.ALL_DATA,
    data,
  };
};
