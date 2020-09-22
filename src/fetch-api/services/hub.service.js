import requestService from '../http.lib';
import URLS from '../restful-api.links';

const hubService = {
  getHubData: async () => {
    const backendResponse = await requestService.get(
      `${URLS.HUB}/?platform=web&version=1.0.0&locale=ru`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  }
};

export default hubService;
