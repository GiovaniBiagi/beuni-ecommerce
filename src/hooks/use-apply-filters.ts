import { useFormState } from "react-dom";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FilterOptions } from "_/enums";

interface UseApplyFiltersParams {
  keys: (keyof typeof FilterOptions)[];
  shouldUseReplace?: boolean;
  callback?: () => void;
}

export const useApplyFilters = ({
  keys,
  shouldUseReplace = true,
  callback,
}: UseApplyFiltersParams) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleApplyFilters = (_prev: any, formState: FormData) => {
    const params = new URLSearchParams(
      Array.from(searchParams?.entries() || [])
    );

    keys.forEach((key) => {
      const value = formState.get(key);
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    const url = `/products?${params.toString()}`;

    if (callback) {
      callback();
    }

    shouldUseReplace ? replace(url) : url;
  };

  const [_, formAction] = useFormState(handleApplyFilters, null);

  // Get defaultValues from the URL parameters
  const defaultFilterValues: Record<keyof typeof FilterOptions, string | null> =
    {
      category: null,
      sortBy: null,
      min: null,
      max: null,
      q: null,
    };

  if (searchParams) {
    keys.forEach((key) => {
      defaultFilterValues[key] = searchParams.get(key);
    });
  }

  return { formAction, defaultFilterValues };
};
