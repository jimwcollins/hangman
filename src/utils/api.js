import axios from 'axios';
import { apiKey } from './api-config';
import { formatPhrases } from './utils';

const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getFilms = async () => {
  const {
    data: { results },
  } = await movieApi.get('discover/movie', {
    params: {
      api_key: apiKey,
      with_genres: 27,
      sort_by: 'vote_average.desc',
      'vote_count.gte': 1500,
      include_adult: false,
      include_video: false,
    },
  });

  return results.map((film) => film.title);
};
