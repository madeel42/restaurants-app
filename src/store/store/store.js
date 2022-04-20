import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import allReducer from '../reducers/root';
const middleWare = [thunk]
let store = createStore(allReducer,compose(applyMiddleware(...middleWare),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// let store = createStore(allReducer,applyMiddleware(...middleWare))
export default store