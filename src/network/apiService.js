const fetchApi = async (requestUrl, requestInit = {}) => {
  try {
    requestInit = {
      ...requestInit,
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    };
    const response = await fetch(encodeURI(requestUrl), requestInit);
    if (response.ok) {
      const data = await response.json();
      return {data, status: response.status};
    } else {
      return {data: null, status: response.status};
    }
  } catch (error) {
    return {data: null, status: 504 /*Request Timeout Error Code*/};
  }
};

export {fetchApi};
