import { handleResponse } from '../common/handleResponse';
import data from '../data/episodes.json';

export const handler = async event => {
  console.log(event);
  const { showId } = event.pathParameters || {};

  if (!showId) {
    return handleResponse({ message: 'Incorrect showId provided' }, 400);
  }

  try {
    const currentEpisode = data.find(({ id }) => id === showId);
    console.log('currentEpisode', currentEpisode);

    if (!currentEpisode) {
      return handleResponse({ message: 'No episode with current id' }, 400);
    }

    return handleResponse(currentEpisode);
  } catch (error) {
    return handleResponse({ message: error.message }, 500);
  }
};
