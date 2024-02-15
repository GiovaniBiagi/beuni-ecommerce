"use client";
// @ts-ignore
import { useFormStatus } from "react-dom";

import { Input } from "./input";
import { Search } from "lucide-react";
import { Button } from "./button";
import { useApplyFilters } from "_/hooks/use-apply-filters";
import { LoadingSpinner } from "./loading-spinner";
import { FilterOptions } from "_/enums";

const Submit = () => {
  const status = useFormStatus();

  return (
    <Button
      type="submit"
      variant="link"
      className="flex space-x-2"
      disabled={status.pending}
    >
      {status.pending ? (
        <>
          <LoadingSpinner className="h-4 w-4" />
          <span>Pesquisando</span>
        </>
      ) : (
        <>
          <Search className="h-4 w-4 " />
          <span>Pesquisar</span>
        </>
      )}
    </Button>
  );
};

export function SearchInput() {
  const { formAction, defaultFilterValues } = useApplyFilters({
    keys: [FilterOptions.q],
  });

  return (
    <form className="flex flex-1 justify-between space-x-2" action={formAction}>
      <Input
        placeholder="Buscar produtos..."
        name="q"
        className="pl-8"
        defaultValue={defaultFilterValues?.q ?? ""}
      />
      <Submit />
    </form>
  );
}
