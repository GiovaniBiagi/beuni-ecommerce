import { z } from "zod";

export const ProductsSchema = z.any();

export type Products = z.infer<typeof ProductsSchema>;

export const PriceListSchema = z.object({
  lower_bound: z.number(),
  upper_bound: z.number(),
  value: z.number(),
});
export type PriceList = z.infer<typeof PriceListSchema>;

export const FullSchema = z.object({
  url: z.string(),
  width: z.number(),
  height: z.number(),
});
export type Full = z.infer<typeof FullSchema>;

export const ThumbnailsSchema = z.object({
  small: FullSchema,
  large: FullSchema,
  full: FullSchema,
});
export type Thumbnails = z.infer<typeof ThumbnailsSchema>;

export const ImageSchema = z.object({
  id: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  filename: z.string(),
  size: z.number(),
  type: z.string(),
  thumbnails: ThumbnailsSchema,
});
export type Image = z.infer<typeof ImageSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.number(),
  description: z.string(),
  categories: z.array(z.string()),
  brand: z.null(),
  supplier: z.string(),
  image: z.array(ImageSchema),
  hasFreeShipping: z.boolean(),
  price: z.number(),
  rating: z.number(),
  recordId: z.string(),
  colorOptions: z.array(z.string()),
  priceLists: z.array(PriceListSchema),
  minimumQuantity: z.number(),
  total_stock: z.number(),
  product: z
    .object({
      "Nome do fornecedor": z.string(),
    })
    .optional(),
});
export type Product = z.infer<typeof ProductSchema>;
