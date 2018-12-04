import { ADD_LINK_REQUEST } from "../constants/typeAction";

export const addLink = (values, callback) => ({
  type: ADD_LINK_REQUEST,
  meta:values,
  callback
});
