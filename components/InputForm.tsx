"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { ButtonOutline } from "./ButtonOutline";

const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  workingmail: z.string().email({ message: "Invalid email address." }).min(2, {
    message: "Working mail must be at least 2 characters.",
  }),
  anythingelse: z.string().min(2, {
    message: "Anything else must be at least 2 characters.",
  }),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      workingmail: "",
      anythingelse: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workingmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Working Mail</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="anythingelse"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Anything else?</FormLabel>
              <FormControl>
                <Textarea placeholder="Message goes here..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonOutline text="Submit" />
      </form>
    </Form>
  );
}
