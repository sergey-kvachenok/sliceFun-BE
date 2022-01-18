import { handleResponse } from '../common/handleResponse';
import data from '../data/shows.json';

const filterStingBySearch = (stringVal, search) => {
  const regex = new RegExp(search, 'i');

  return regex.test(stringVal);
};

const filterBySearch = (objectData, search) => {
  const { title, category } = objectData || {};

  if (filterStingBySearch(title, search)) return true;

  const matchedCategory = category.find(categotyStr => filterStingBySearch(categotyStr, search));

  return !!matchedCategory;
};

export const handler = async event => {
  const { search } = event.queryStringParameters;

  if (!search) return handleResponse(data);

  try {
    const result = data.filter(item => filterBySearch(item, search));

    return handleResponse(result);
  } catch (error) {
    return handleResponse({ message: error.message }, 500);
  }
};
