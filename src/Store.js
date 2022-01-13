import {createStore,combineReducers, applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { NasaDataReducer } from "./reducers/NasaDataReducer"

const reducer=combineReducers({
    NasaData:NasaDataReducer
})
let initState ={}
const middleware= [thunk];

const store=createStore(reducer,initState,composeWithDevTools(applyMiddleware(...middleware)))

export default store