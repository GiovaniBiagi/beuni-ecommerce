import { z } from "zod";

export const CategoriesSchema = z.any();

export type Categories = z.infer<typeof CategoriesSchema>;
