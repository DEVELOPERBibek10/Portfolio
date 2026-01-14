import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { formSchema } from "@/lib/Zod/schema";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        values,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status !== 200) throw new Error(response.text);
      form.reset();
      toast.success("Message sent sucessfully");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Oops! Failed to send message");
        return;
      }
      toast.error("Oops! Failed to send message");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-full flex flex-col items-center justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    className="w-90 md:w-180"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    type="email"
                    className="w-90 md:w-180"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={loading}
                    className="w-90 h-20 md:w-180 md:h-40"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={loading}
            className="w-90 md:w-180 cursor-pointer"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
