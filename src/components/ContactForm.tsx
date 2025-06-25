import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/schema/contactSchema";
import Button from "./ui/Button.tsx";
import Input from "./ui/Input.tsx";
import Textarea from "./ui/Textarea.tsx";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully.");
        reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Name"
              {...register("name")}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="text-error text-sm">{errors.name.message}</span>
            )}
          </div>
          <div className="w-full">
            <Input
              type="email"
              placeholder="Email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-error text-sm">{errors.email.message}</span>
            )}
          </div>
          <div className="w-full">
            <Textarea
              {...register("message")}
              placeholder="Message"
              aria-invalid={!!errors.email}
            />
            {errors.message && (
              <span className="text-error text-sm">
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <Button
              type={"submit"}
              variant={isSubmitSuccessful ? "success" : "primary"}
              disabled={isSubmitting || isSubmitSuccessful}
            >
              {isSubmitting
                ? "Sending"
                : isSubmitSuccessful
                  ? "Message Sent"
                  : "Submit"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
