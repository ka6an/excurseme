import requestService from '../http.lib';
import URLS from '../restful-api.links';

const tourService = {
  createTour: async tourBase => {
    try {
      const backendResponse = await requestService.post(
        `${URLS.BASE}/web/tour/create/`,
        tourBase
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  updateTourBase: async (tourId, tourBase) => {
    try {
      const backendResponse = await requestService.post(
        `${URLS.BASE}/web/tour/${tourId}/base/`,
        tourBase
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  getTourBase: async tourId => {
    try {
      const backendResponse = await requestService.get(
        `${URLS.BASE}/web/tour/${tourId}/base/`
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  setTourDetails: async (tourId, tourDetails) => {
    try {
      const backendResponse = await requestService.post(
        `${URLS.BASE}/web/tour/${tourId}/details/`,
        tourDetails
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  getTourDetails: async tourId => {
    try {
      const backendResponse = await requestService.get(
        `${URLS.BASE}/web/tour/${tourId}/details/`
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  setTourPhotos: async (tourId, tourPhotos) => {
    try {
      const backendResponse = await requestService.post(
        `${URLS.BASE}/web/tour/${tourId}/photos/`,
        tourPhotos
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  getTourPhotos: async tourId => {
    try {
      const backendResponse = await requestService.get(
        `${URLS.BASE}/web/tour/${tourId}/photos/`
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  setTourRoute: async (tourId, tourRoute) => {
    try {
      const backendResponse = await requestService.post(
        `${URLS.BASE}/web/tour/${tourId}/route/`,
        tourRoute
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  getTourRoute: async tourId => {
    try {
      const backendResponse = await requestService.get(
        `${URLS.BASE}/web/tour/${tourId}/route/`
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  },
  setTourOnVerification: async tourId => {
    try {
      const backendResponse = await requestService.post(
        `${URLS.BASE}/web/tour/${tourId}/to-check/`
      );
      const { response, data } = backendResponse;
      if (response.ok) {
        return data;
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      throw error;
    }
  }
};

export default tourService;
