import { combineReducers } from "redux";
import dataReducer from "./data";
let allReducers = combineReducers({ dataReducer });
export default allReducers;
