import * as actionCreater from "../actionCreator/actionCreator";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        // "https://techd.s3.amazonaws.com/restaurant-data.json" // getting cors error i think there's backend issue, even i checked with proxy,
        "data.json"   /// this is in public folder, i copied the data from link
      );

      dispatch(actionCreater.dataAction(res));
    } catch (err) {
      console.log(err);
    }
  };
};
