import axios from 'axios';
import {API_KEY, DEFAULT_PAGE_SIZE} from 'utils/Constants';
import {RNToasty} from 'react-native-toasty';

// Initiate Base URL
const api = axios.create({
  baseURL: 'http://newsapi.org/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 3000,
});

// Error Handler
const errorHandler = ({response}) => {
  if (!response.status) {
    RNToasty.Error({
      title: 'Connection Error. Please check your connection again.',
    });
  } else {
    RNToasty.Error({
      title: `${response.status}: ${response.statusText}`,
    });
  }
  return response;
};

// API Request List
export const apiGetSampleNews = (params = {}) =>
  api
    .get('/top-headlines', {
      params: {
        apiKey: API_KEY,
        q: params.keyword,
        country: params.country,
        category: params.category,
        sources: params.sources,
        pageSize: params.pageSize || DEFAULT_PAGE_SIZE,
        page: params.page || 1,
      },
    })
    .catch((error) => {
      return errorHandler(error);
    });
