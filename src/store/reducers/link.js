import {
  ADD_LINK_SUCCESS,
  ADD_LINK_REQUEST,
  ADD_LINK_FAILURE,
  GET_TOP_LINK_SUCCESS,
  GET_TOP_LINK_REQUEST,
  GET_TOP_LINK_FAILURE
} from "../constants/typeAction";
// reducer with initial state
const initialState = {
  loading: false,
  data: [],
  error: null,
  list: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LINK_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_LINK_SUCCESS:
      var stateCopy = { ...state };
      let index = stateCopy.list_shortLink[action.data.short_link];
      if (index == null) {
        stateCopy.data.unshift(action.data);
      } else {
        stateCopy.data[index] = action.data;
      }
      return {
        ...stateCopy,
        loading: false
      };
    case ADD_LINK_FAILURE:
      return { ...state, loading: false, error: action.error };

    case GET_TOP_LINK_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_TOP_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        list_shortLink: initData(action.data)
      };
    case GET_TOP_LINK_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
}

function initData(data) {
  let list_shortLink = {};
  for (var i = 0; i < data.length; i++) {
    
    list_shortLink[data[i].short_link] = i;
  }
  return list_shortLink;
}
