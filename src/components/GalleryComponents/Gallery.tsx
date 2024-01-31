import fetchImages from '@/lib/fetchImages';
import addBlurredDataUrls from '@/lib/getBase64';
import { ImagePagination } from '@/models/Images';
import { ImageContainer } from './ImageContainer';

export async function Gallery() {
  const url = 'https://api.pexels.com/v1/curated';
  const images: ImagePagination | undefined = await fetchImages(url);

  if (!images) {
    return <h2>No Image is found</h2>;
  }

  const imagesWithBlurred = await addBlurredDataUrls(images);
  return (
    <div className='my-3 grid grid-cols-gallery gap-2 px-2'>
      {imagesWithBlurred.map((item, index) => {
        {
          /* {images.photos.map((item, index) => { */
        }
        return <ImageContainer key={item.id} photo={item} />;
      })}
    </div>
  );
}
