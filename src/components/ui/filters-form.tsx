"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./button";
import { Input } from "./input";
import { Select } from "./select";
import { FilterOptions, SortOptions } from "_/enums";
import { useApplyFilters } from "_/hooks/use-apply-filters";
import { LoadingSpinner } from "./loading-spinner";

const Submit = () => {
  const status = useFormStatus();

  return (
    <Button type="submit" className="mt-4 w-full" disabled={status.pending}>
      Aplicar
      {status.pending ? (
        <LoadingSpinner className="text-white w-4 h-4 ml-2" />
      ) : null}
    </Button>
  );
};

export function Filters() {
  const { formAction, defaultFilterValues } = useApplyFilters({
    keys: [FilterOptions.min, FilterOptions.max, FilterOptions.sortBy],
  });

  return (
    <form action={formAction}>
      <div>
        <h4 className="font-semibold">Ordenar por</h4>
        <Select.Root
          name="sortBy"
          defaultValue={defaultFilterValues?.sortBy ?? ""}
        >
          <Select.Trigger className="mt-2">
            <Select.Value placeholder="Selecione um critério" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              {Object.entries(SortOptions).map(([key, value]) => (
                <Select.Item key={key} value={key}>
                  {value}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
      <div>
        <h4 className="font-semibold mt-4">Preço</h4>
        <div className="flex gap-4 mt-2">
          <Input
            name="min"
            placeholder="Mínimo"
            defaultValue={defaultFilterValues?.min ?? ""}
          />
          <Input
            name="max"
            placeholder="Máximo"
            defaultValue={defaultFilterValues?.max ?? ""}
          />
        </div>
      </div>
      <Submit />
    </form>
  );
}
