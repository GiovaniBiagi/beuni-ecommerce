import { Method, type FetchResponse } from "_/types";
import type { Product, Products } from "./products.schema";
import { ZodError } from "zod";
import { grabber } from "_/services/grabber";
import { errorTracker } from "_/utils/error-tracker";

type ResponseTypeVariations = Products | Product;

type ERROR = ZodError<ResponseTypeVariations>;

interface ProductFetchProps {
  method?: Method;
  endpoint: string;
  schema: any;
}

export const productsFetch = async ({
  endpoint = "/products",
  method = "GET",
  schema,
}: ProductFetchProps): Promise<
  FetchResponse<ResponseTypeVariations, ERROR>
> => {
  try {
    const dataResponse = await grabber<ResponseTypeVariations, Request>({
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
    errorTracker(error, "products-fetch");
    return {
      data: {} as ResponseTypeVariations,
      error: error,
    };
  }
};
