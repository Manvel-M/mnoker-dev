import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { contactSchema } from "@/schema/contactSchema";
import { RESEND_API_KEY } from "astro:env/server";
import { SENT_FROM_EMAIL, SEND_TO_EMAIL } from "astro:env/client";

const resend = new Resend(RESEND_API_KEY);
const sendToEmail = SEND_TO_EMAIL;
const sentFromEmail = SENT_FROM_EMAIL;

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
