import { NASA_DATA_FETCH, NASA_DATA_IS_LOADING, NASA_MORE_DATA_LOADING } from "../constants/NasaDataConstant";

export const NasaDataReducer = (state = {}, action) => {
  switch (action.type) {
    case NASA_DATA_FETCH:
      return { loading: false, data: action.payload };
    case NASA_DATA_IS_LOADING:
        return {...state,loading:true}
    case NASA_MORE_DATA_LOADING:
        return {loading:false,data:[...state.data,...action.payload]}
        
    default:
      return state;
  }
};
