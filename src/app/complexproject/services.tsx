import { apiGet } from '@/config/common/api';
import { apiRoutes } from '@/config/common/api-routes';

export const downloadDemoCandidates = async () => {
  try {
    let response: any = await apiGet(apiRoutes.REFRESH_TOKEN, {
      responseType: 'blob',
    });
    return response;
  } catch (error) {
    // catchBlockHandler(error);
  }
};
