import {ADD_LINK_SUCCESS,ADD_LINK_REQUEST,ADD_LINK_FAILURE} from '../constants/typeAction'
 // reducer with initial state
 const initialState = {
   loading: false,
   links: [],
   error: null
 };

 export default function reducer(state = initialState, action) {
   switch (action.type) {
     case ADD_LINK_REQUEST:
       return { ...state, loading: true, error: null };
     case ADD_LINK_SUCCESS:
       return { ...state, loading: false, link: state.links.concat(action.data) };
     case ADD_LINK_FAILURE:
       return { ...state, loading: false, dog: null, error: action.error };
     default:
       return state;
   }
 }
 