import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { actions } from "astro:actions";
import { contactSchema, type ContactFormData } from "@/schema/contactSchema";

import { Button, Input, Textarea } from "@/components/ui";
import { toast, Toaster } from "react-hot-toast";

function ContactForm2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const notifySuccess = () => toast("Message sent successfuly!");

  const onSubmit = async (data: ContactFormData) => {
    try {
      await actions.send(data);
      notifySuccess();
      reset();
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <>
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
              variant={isSubmitting ? "secondary" : "primary"}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "green",
            color: "white",
          },
        }}
      />
    </>
  );
}

export default ContactForm2;
