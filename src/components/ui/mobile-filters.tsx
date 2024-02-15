import { ListFilter } from "lucide-react";
import { FilterOptions, SortOptions } from "_/enums";
import { Button } from "./button";
import { Dialog } from "./dialog";
import { Select } from "./select";
import { Input } from "./input";
import { LoadingSpinner } from "./loading-spinner";
import { useFormStatus } from "react-dom";
import { useApplyFilters } from "_/hooks/use-apply-filters";
import { useState } from "react";

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

export function MobileFilters() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const { formAction, defaultFilterValues } = useApplyFilters({
    keys: Object.keys(FilterOptions) as (keyof typeof FilterOptions)[],
    callback: handleToggle,
  });

  return (
    <Dialog.Root open={open} onOpenChange={handleToggle}>
      <Dialog.Trigger asChild>
        <Button variant="secondary" className="w-full flex gap-x-2">
          Filtros e Ordenação
          <ListFilter className="h-4 w-4" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <form className="space-y-4" action={formAction}>
          <div className="space-y-2">
            <label className="font-bold mt-4" htmlFor="sortBy">
              Categorizar
            </label>
            <Select.Root
              name="category"
              defaultValue={defaultFilterValues?.category ?? ""}
            >
              <Select.Trigger id="category">
                <Select.Value placeholder="Selecione uma categoria" />
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
          <div className="space-y-2">
            <label className="font-bold mt-4" htmlFor="sortBy">
              Ordenar por
            </label>
            <Select.Root
              name="sortBy"
              defaultValue={defaultFilterValues?.sortBy ?? ""}
            >
              <Select.Trigger id="sortBy">
                <Select.Value placeholder="Ordenar" />
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
          <div className="space-y-2">
            <label className="font-bold mt-4" htmlFor="min-max">
              Preço
            </label>
            <div className="flex gap-4 mt-2" id="min-max">
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
      </Dialog.Content>
    </Dialog.Root>
  );
}
