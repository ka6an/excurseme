import requestService from '../http.lib';
import URLS from '../restful-api.links';

const toursService = {
  getToursByStatus: async status => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/tours/?status=${status}`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  },
  getToursById: async tourId => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/tours/${tourId}`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  }
};

export default toursService;
