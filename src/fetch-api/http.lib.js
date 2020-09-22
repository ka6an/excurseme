const JWT =
  'eyJhbGciOiJIUzI1NiJ9.eyJsYXRpdHVkZSI6NTkuOTU3MjgxOCwibG9jYWxlIjoicnUiLCJsb25naXR1ZGUiOjMwLjQwMjI0NTYsInBsYXRmb3JtIjoiaW9zIiwidXNlciI6Imd1aWRlQHRlc3QuY29tIiwidGltZXpvbmUiOiJFdXJvcGUvTW9zY293IiwidmVyc2lvbiI6IjEuMC4wIn0.5H6E6TQqaCiskN8y4Lx6FZhHSGFEHpQLDfj6ybGx9a4';
const requestService = {
  get: async url => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${JWT}`
      },
      redirect: 'follow'
    });
    if (response.ok) {
      const data = await response.text();
      return { data, response };
    }
    const requestError = {
      status: response.status,
      statusText: response.statusText
    };
    return { requestError };
  },
  post: async (url, payload) => {
    const response = await fetch(url, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        Authorization: `Bearer ${JWT}`
      },
      body: payload
    });
    if (response.ok) {
      const data = await response.text();
      return { data, response };
    }
    const requestError = {
      status: response.status,
      statusText: response.statusText
    };
    return { requestError };
  },
  put: async (url, payload) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${JWT}`
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      const data = await response.json();
      return { data, response };
    }
    const requestError = {
      status: response.status,
      statusText: response.statusText
    };
    return { requestError };
  },
  delete: async url => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${JWT}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      return { data, response };
    }
    const requestError = {
      status: response.status,
      statusText: response.statusText
    };
    return { requestError };
  }
};

export default requestService;
