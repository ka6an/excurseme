const ROUTES = {
  HOMEPAGE: '/',
  GUIDE: {
    PROFILE: '/guide',
    TOURS: '/tours',
    REVIEWS: '/reviews'
  },
  TOUR_MANAGEMENT: {
    BASE: '/tour-management',
    CREATION: '/create',
    EDITING: {
      BASE: '/tour-management/edit',
      DESCRIPTION: '/tour-management/edit/description',
      DETAILS: '/tour-management/edit/details',
      PHOTOS: '/tour-management/edit/photos',
      ROUTE: '/tour-management/edit/route'
    }
  },
  GUIDE_TOUR_MANAGEMENT: {
    BASE: '/guide-tour-management',
    ACTIVE: '/guide-tour-management/active',
    UNPUBLISHED: '/guide-tour-management/unpublished',
    DRAFT: '/guide-tour-management/draft',
    REJECTED: '/guide-tour-management/rejected',
    PENDING: '/guide-tour-management/pending'
  },
  ERROR: '/error'
};

export default ROUTES;
