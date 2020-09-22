import requestService from '../http.lib';
import URLS from '../restful-api.links';

const guideService = {
  getGuideData: async id => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${id}/`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  },
  getGuideReviews: async id => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${id}/reviews/`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  },
  getGuideTours: async guideId => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${guideId}/tours/`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response && data;
    } else {
      throw requestError;
    }
  },
  getGuideToursByDate: async (guideId, date) => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${guideId}/tours/by-date/?date=${date}`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  },
  getGuideSchedule: async (guideId, dateStart, dateEnd) => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${guideId}/schedule/?date-start=${dateStart}&date-end=${dateEnd}`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  },
  getSelectedGuideTour: async (guideId, tourId) => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${guideId}/tours/${tourId}/`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  },
  getSelectedGuideTourReviews: async (guideId, tourId) => {
    const backendResponse = await requestService.get(
      `${URLS.BASE}/web/guide/${guideId}/tours/${tourId}/reviews`
    );
    const { response, data, requestError } = backendResponse;
    if (response) {
      return response.ok && data;
    } else {
      throw requestError;
    }
  }
};

export default guideService;
