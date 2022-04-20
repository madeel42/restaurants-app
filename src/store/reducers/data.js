import * as allAction from "../actions/allActions";

let initialData = {
  data: [],
};

const dataReducer = (state = initialData, action) => {
  switch (action.type) {
    case allAction.ALL_DATA: {
      return {
        data: action.data.data.restaurants,
      };
    }
  }
  return state;
};
export default dataReducer;
