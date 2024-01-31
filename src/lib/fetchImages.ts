import {
  ImagePagination,
  ImagePaginationSchemaWithPhotos,
} from '@/models/Images';
// import env from './env';

export default async function fetchImages(
  url: string
): Promise<ImagePagination | undefined> {
  try {
    const response = await fetch(url, {
      headers: {
        // Authorization: env.PEXELS_API_KEY,
        Authorization:
          'xn7LihAZRKrekQRBcGLSAGiROPpJkeCOfpswUlFRZE4smnJlLGG9qTIU',
      },
    });
    if (!response.ok) throw new Error('Fetch Request Failed!\n');

    const imageResult: ImagePagination = await response.json();
    // console.log('PEXELS API KEY IS: ', env.PEXELS_API_KEY);
    // Parse data with ZOD
    const parsedData = ImagePaginationSchemaWithPhotos.parse(imageResult);

    if (parsedData.total_results === 0) {
      return undefined;
    }
    return parsedData;
  } catch (e) {
    // Log in the console for the time being
    if (e instanceof Error) console.log(e.stack);
  }
}
