import { PUBLIC_API_BASE_URL } from './envConstants';
const PUBLIC_ROUTE = PUBLIC_API_BASE_URL + '/public';
const PROTECTED_ROUTE = PUBLIC_API_BASE_URL + '/protected';
const PRIVATE_ROUTE = PUBLIC_API_BASE_URL + '/private';

export const apiRoutes = Object.freeze({
  API_BASE_SERVICE_PATH: PUBLIC_API_BASE_URL,
});
