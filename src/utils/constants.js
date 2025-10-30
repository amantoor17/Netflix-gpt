export const  API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  }
};

export const IMG_CDN_URL = import.meta.env.VITE_IMG_CDN_URL;

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;