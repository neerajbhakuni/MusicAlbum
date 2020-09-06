import {config} from './config';
import {fetchApi} from './apiService';

const fetchSearchAlbum = async ({term}) => {
  const url = config.baseUrl + config.service.searchAlbum + `?term='${term}'`;
  const method = config.httpMethod.GET;
  return await fetchApi(url, {timeout: config.timeout, method});
};

export {fetchSearchAlbum};
