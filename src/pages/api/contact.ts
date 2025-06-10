import type { ContactFormData } from "@/schema/contactSchema";
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const sendToEmail = import.meta.env.SEND_TO_EMAIL;
const sentFromEmail = import.meta.env.SENT_FROM_EMAIL;

export const POST: APIRoute = async ({ request }) => {
  const { name, email, message }: ContactFormData = await request.json();

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
