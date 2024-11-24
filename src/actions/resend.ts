"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(1, { message: "Por favor, preencha seu nome" }),
  phone: z
    .string()
    .min(1, { message: "Por favor, preencha seu telefone" })
    .regex(/^[\d()\-]*$/g, { message: "Por favor, preencha seu telefone" }),
  email: z
    .string()
    .min(1, { message: "Por favor, preencha seu email" })
    .regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i, {
      message: "Email inválido",
    }),
  message: z.string().min(1, { message: "Por favor, escreva uma mensagem" }),
});

export const sendMessage = async (form: HTMLFormElement, data: FormData) => {
  const result = schema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return {
      success: false,
      message: null,
      errors,
    };
  }

  const { name, phone, email, message } = result.data;

  try {
    await resend.emails.send({
      from: "contato@habplastic.com.br",
      to: email,
      bcc: "contato@habplastic.com.br",
      subject: "Mensagem do site",
      html: `<p>Nome: ${name}</p><p>Celular: ${phone}</p><p>${message}</p>`,
    });

    return {
      success: true,
      message: "Email enviado com sucesso!",
      errors: null,
    };
  } catch (error) {
    console.log("ERROR: ", error);
    return {
      success: false,
      message:
        "Não foi possível enviar email, tente entrar em contato pelo whatsapp",
      errors: null,
    };
  }
};
