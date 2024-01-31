import { z } from 'zod';
const ImagePaginationSchema = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  next_page: z.string().optional(),
  prev_page: z.string().optional(),
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  avg_color: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredImageURL: z.string().optional(),
});

export const ImagePaginationSchemaWithPhotos = ImagePaginationSchema.extend({
  photos: z.array(PhotoSchema),
});

export type Photo = z.infer<typeof PhotoSchema>;

export type ImagePagination = z.infer<typeof ImagePaginationSchemaWithPhotos>;
