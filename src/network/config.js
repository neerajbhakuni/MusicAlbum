const environments = {
  local: {
    useSSL: false,
    baseURI: '',
  },
  dev: {
    useSSL: true,
    baseURI: '',
  },
  uat: {
    useSSL: true,
    baseURI: '',
  },
  prod: {
    useSSL: true,
    baseURI: 'itunes.apple.com',
  },
};

// FIXME: Need to change the base URI
const environment = environments.prod;
const scheme = environment.useSSL ? 'https' : 'http';

const config = {
  baseUrl: `${scheme}://${environment.baseURI}`,
  APIKey: `${environment.apiKey}`,
  timeout: 2 * 1000 * 60,
  FCMSenderId: '',
  httpMethod: {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
  },
  service: {
    searchAlbum: '/search',
  },
};

export {config};
