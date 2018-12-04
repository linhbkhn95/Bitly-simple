import { ADD_LINK } from "../constants/typeAction";

export const addLink = (full_link, callback) => ({
  type: ADD_LINK,
  value: full_link,
  callback
});
