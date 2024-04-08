import { PUBLIC_API_BASE_URL } from './envConstants';



export interface IQueryParams {
  limit?: number;
  offset?: number;
  [key: string]: string | number | undefined;
}

const addQueryParams = (route: string) => (queryParams: IQueryParams = {limit: 10, offset: 0}) => {
  let modifiedUrl = route;
  if (route.slice(-1) === '/') {
      modifiedUrl = route.slice(0, -1)
  }
  const queryString = `/?${Object.entries(queryParams).map(([key, value]) => `&${key}=${value}`).join('')}`;
  return `${modifiedUrl}${queryString}`;
};

export function getFullUrl(path: string) {
  return PUBLIC_API_BASE_URL.concat("/", path)
}

const PUBLIC_ROUTE = PUBLIC_API_BASE_URL + '/public';
const PROTECTED_ROUTE = PUBLIC_API_BASE_URL + '/protected';
const PRIVATE_ROUTE = PUBLIC_API_BASE_URL + '/private';

export const apiRoutes = Object.freeze({
  API_BASE_SERVICE_PATH: PUBLIC_API_BASE_URL,
  AUTH: {
    USER_PROFILE: "/auth/api/profile/",
    LOGIN: "/auth/api/signin/",
    SIGN_UP: "/auth/api/signup/",
    REFRESH_TOKEN: "/auth/api/token/refresh/",
    BLACK_LIST: "/auth/api/token/blacklist-custom/",
},
FILES: {
    IMAGES: `files/images/`
},
  PUBLIC:{
    PROJECTS: {
      ALL_PROJECT: addQueryParams("/projects/api/v1/public/projects/")
    }
  }, 
  PRIVATE:{
    PROJECTS: {
      ALL_PROJECT: addQueryParams("/projects/api/v1/private/projects/"),
      PROJECT_MILESTONE:(projectId:string)=> addQueryParams(`/projects/api/v1/private/projects/${projectId}/milestones/`)
    }
  },
  PROTECTED:{

  },
});
