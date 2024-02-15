import { useFormState, useFormStatus } from "react-dom";
import { Dialog } from "./dialog";
import { useState } from "react";
import { Button } from "./button";
import { Mail } from "lucide-react";
import { Input } from "./input";
import { LoadingSpinner } from "./loading-spinner";

const Submit = () => {
  const status = useFormStatus();

  return (
    <Button type="submit" className="mt-4 w-full" disabled={status.pending}>
      Avise-me
      {status.pending ? (
        <LoadingSpinner className="text-white w-4 h-4 ml-2" />
      ) : null}
    </Button>
  );
};

export function OutOfStockContactDialog() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleSubmitContactForm = (_prevState: any, formData: FormData) => {
    handleToggle();
  };

  const [_, formAction] = useFormState(handleSubmitContactForm, null);

  return (
    <Dialog.Root open={open} onOpenChange={handleToggle}>
      <Dialog.Trigger asChild>
        <Button variant="secondary" className="w-full flex gap-x-2">
          Avise-me quando disponível
          <Mail className="h-4 w-4" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <form className="space-y-4" action={formAction}>
          <div className="space-y-2">
            <label className="font-bold mt-4" htmlFor="min-max">
              Nome
            </label>
            <div className="flex gap-4 mt-2" id="min-max">
              <Input name="name" placeholder="name" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-bold mt-4" htmlFor="min-max">
              E-mail
            </label>
            <div className="flex gap-4 mt-2" id="min-max">
              <Input name="email" placeholder="email" />
            </div>
          </div>
          <Submit />
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
