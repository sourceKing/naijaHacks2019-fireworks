// require('es6-promise').polyfill();
import 'isomorphic-fetch';

import getRootUrl from './getRootUrl';

export default async function sendRequest(path, opts = {}) {
  const headers = Object.assign({}, opts.headers || {'Content-type': 'application/json; charset=UTF-8'});

  //  credentials: 'same-origin' might need to add
  const response = await fetch(
    `${getRootUrl()}${path}`, //remove getRootUrl() for production;
    Object.assign({ method: 'POST', credentials: 'same-origin' }, opts, { headers }),
  );

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
    console.log(data.error);
  }

  return data;
}