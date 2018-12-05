import { ADD_LINK_REQUEST, GET_TOP_LINK_REQUEST } from "../constants/typeAction";

export const addLink = (values, callback) => ({
  type: ADD_LINK_REQUEST,
  meta:values,
  callback
});
export const getTopLink = (cb)=>({
  type:GET_TOP_LINK_REQUEST,
  cb

})