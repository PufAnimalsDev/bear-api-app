const BASE_URL = 'https://api.punkapi.com/v2/beers/';

function request<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export const service = {
  get: <T>(url: string) => request<T>(url),
};
