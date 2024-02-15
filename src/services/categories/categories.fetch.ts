import { Method, type FetchResponse } from "_/types";
import type { Categories } from "./categories.schema";
import { ZodError } from "zod";
import { grabber } from "_/services/grabber";
import { errorTracker } from "_/utils/error-tracker";

type ERROR = ZodError<Categories>;

interface CategoriesFetchProps {
  method?: Method;
  endpoint?: string;
  schema: any;
}

export const categoriesFetch = async ({
  endpoint = "/categories",
  method = "GET",
  schema,
}: CategoriesFetchProps): Promise<FetchResponse<Categories, ERROR>> => {
  try {
    const dataResponse = await grabber<Categories, Request>({
      endpoint,
      method,
      individualRequest: true,
    });

    const response = schema.safeParse(dataResponse);

    if (!response.success) {
      throw {
        responseError: dataResponse,
        schemaError: response.error,
      };
    }

    return {
      data: response.data,
      error: null,
    };
  } catch (flaw) {
    const error = flaw as unknown as ERROR;
    errorTracker(error, "categories-fetch");
    return {
      data: {} as Categories,
      error: error,
    };
  }
};
