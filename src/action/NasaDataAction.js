import {
  NASA_DATA_FETCH,
  NASA_DATA_IS_LOADING,
  NASA_FETCH_ERROE,
  NASA_MORE_DATA_LOADING,
} from "../constants/NasaDataConstant";

export const GetNasaData = () => async (dispatch) => {
  try {
    dispatch({ type: NASA_DATA_IS_LOADING });
    let url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`;
    let res = await fetch(url);
    let jsonData = await res.json();
    dispatch({ type: NASA_DATA_FETCH, payload: jsonData.hits });
  } catch (error) {
    dispatch({ type: NASA_FETCH_ERROE, payload: error.message });
  }
};
export const GetMoreNasaData = () => async (dispatch) => {
  try {
    dispatch({ type: NASA_DATA_IS_LOADING });
    let url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1`;
    let res = await fetch(url);
    let jsonData = await res.json();
    // debugger
    dispatch({ type: NASA_MORE_DATA_LOADING, payload: jsonData.hits });
  } catch (error) {
    console.log(error);
    dispatch({ type: NASA_FETCH_ERROE, payload: error.response });
  }
};
