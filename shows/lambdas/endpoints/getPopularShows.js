import { handleResponse } from '../common/handleResponse';
import data from '../data/popularShows.json'

export const handler = async event => {
  console.log(event);
  try {
    return handleResponse(data);
  } catch (error) {
    return handleResponse({ message: error.message }, 500);
  }
};
