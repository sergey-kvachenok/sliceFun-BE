import { handleResponse } from '../common/handleResponse';
import data from '../data/shows.json';

export const handler = async event => {
  console.log(event);
  const { category } = event.queryStringParameters;

  try {
    const transformed = data.map(show => ({
      ...show,
      title: `${show.title} - ${category}`,
    }));
    console.log('transformed', transformed);
    return handleResponse(transformed);
  } catch (error) {
    return handleResponse({ message: error.message }, 500);
  }
};
