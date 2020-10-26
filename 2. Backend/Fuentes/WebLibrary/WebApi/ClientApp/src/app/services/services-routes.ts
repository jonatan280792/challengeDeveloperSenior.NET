import { Config } from '@config/index';

const { baseUrlMotor } = Config.api;

const ServicesRoutes = {
  deletetEditorials: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/deleteEditorials?id=:idEditorial',
  },
  deletetLibrarys: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/deleteLibrarys?id=:idRegister',
  },
  doLogin: {
    needsAuth: false,
    url: baseUrlMotor + '/api/users/doLogin',
  },
  getEditorials: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/getEditorials',
  },
  getLibrarys: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/getLibrarys',
  },
  setEditorials: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/setEditorials',
  },
  setLibrarys: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/setLibrarys',
  },
  updateEditorials: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/putEditorials?id=:idEditorial',
  },
  updateLibrarys: {
    needsAuth: false,
    url: baseUrlMotor + '/api/library/putLibrarys?id=:idRegister',
  }
};

const buildRoute = (path, params) => {
  const route = Object.assign({}, path);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      route.url = route.url.replace(new RegExp(':' + key, 'g'), encodeURIComponent(params[key]) );
    }
  }

  return route;
};

export { buildRoute, ServicesRoutes };
