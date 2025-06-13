import type { ContactFormData } from "@/schema/contactSchema";
import type { APIRoute } from "astro";
import { Resend } from "resend";
import {
  RESEND_API_KEY,
  SEND_TO_EMAIL,
  SENT_FROM_EMAIL,
} from "astro:env/server";

const resend = new Resend(RESEND_API_KEY);
const sendToEmail = SEND_TO_EMAIL;
const sentFromEmail = SENT_FROM_EMAIL;

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message }: ContactFormData = await request.json();
  console.log(sentFromEmail);
  const { error, data } = await resend.emails.send({
    from: `Mnoker.dev <${sentFromEmail}>`,
    to: [`${sendToEmail}`],
    subject: "Hello world",
    html: `<strong>${message}</strong>`,
  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};
