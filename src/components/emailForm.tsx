import { FormEvent, useTransition, useState } from "react";

import { requestFormReset } from "react-dom";
import { withMask } from "use-mask-input";

import { IoIosSend } from "react-icons/io";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";

import { sendMessage } from "@/actions/resend";

export const EmailForm = () => {
  const [isPending, startTransition] = useTransition();

  const [formState, setFormState] = useState<{
    success: boolean;
    message: string | null;
    errors: Record<string, string[]> | null;
  }>({
    success: false,
    message: null,
    errors: null,
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const state = await sendMessage(form, data);

      if (state.success) {
        requestFormReset(form);

        toast.success(state.message);

        setFormState({
          success: false,
          message: null,
          errors: null,
        });
      } else if (state.message) {
        toast.error(state.message);
      }

      setFormState(state);
    });
  };

  return (
    <form
      className="flex flex-col gap-6 bg-white p-6 border border-gray-200 rounded-xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <Input name="name" type="text" placeholder="Nome" />
          {formState.errors?.name && (
            <span className="text-sm text-red-500">
              {formState.errors.name[0]}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Input
            name="phone"
            type="tel"
            placeholder="Celular"
            ref={withMask("(99)99999-9999")}
          />
          {formState.errors?.phone && (
            <span className="text-sm text-red-500">
              {formState.errors?.phone[0]}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Input name="email" type="text" placeholder="Email" />

        {formState.errors?.email && (
          <span className="text-sm text-red-500">
            {formState.errors.email[0]}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Textarea name="message" placeholder="Digite aqui sua mensagem" />
        {formState.errors?.message && (
          <span className="text-sm text-red-500">
            {formState.errors.message[0]}
          </span>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        Enviar <IoIosSend />
      </Button>
    </form>
  );
};
