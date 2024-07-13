import { apiGet } from '@/config/common/api';
import { apiRoutes } from '@/config/common/apiRoutes';

export const downloadDemoCandidates = async () => {
  try {
    let response: any = await apiGet(apiRoutes.AUTH.REFRESH_TOKEN, {
      responseType: 'blob',
    });
    return response;
  } catch (error) {
    // catchBlockHandler(error);
  }
};
