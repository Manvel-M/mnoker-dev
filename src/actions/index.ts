import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { contactSchema } from "@/schema/contactSchema";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const sendToEmail = import.meta.env.SEND_TO_EMAIL;
const sentFromEmail = import.meta.env.SENT_FROM_EMAIL;

export const server = {
  send: defineAction({
    accept: "json",
    input: contactSchema,
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: `mnoker.dev <${sentFromEmail}>`,
        to: [sendToEmail],
        subject: "Hello World",
        html: input.message,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }
      return data;
    },
  }),
};
