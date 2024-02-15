import { categoriesFetch } from "./categories.fetch";
import { CategoriesSchema } from "./categories.schema";

export async function getCategories() {
  const { data: categories, error } = await categoriesFetch({
    schema: CategoriesSchema,
  });

  const data = categories?.map((category: any) => ({
    id: category.record_id,
    name: category.public_id,
  }));

  return { data, error };
}

export async function getCategoryById(id: string) {
  const { data, error } = await categoriesFetch({
    endpoint: `/categories/${id}`,
    schema: CategoriesSchema,
  });

  return { data, error };
}
