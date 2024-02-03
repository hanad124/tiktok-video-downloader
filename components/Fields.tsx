"use client";

import React, { useState, useEffect } from "react";
import { FiDownload, FiX } from "react-icons/fi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/schemas/index";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Fields = () => {
  const { toast } = useToast();
  const [clearInput, setClearInput] = useState("");

  useEffect(() => {
    setClearInput("");
  }, [clearInput]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      url: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {};

  return (
    <div>
      <div className="mt-8 flex justify-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col md:flex-row justify-center gap-2 items-center w-full mx-6 md:mx-none"
          >
            <div className="flex items-center ">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        type="text"
                        placeholder="Paste TikTok video link here"
                        className="items-center  bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 py-3 w-full md:w-[36rem] transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 rounded-md mx-4 md:mx-none"
                        {...field}
                      />
                      {/* <Input placeholder="shadcn" {...field} /> */}
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <button className="w-full md:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-none focus:ring-none py-3 px-4 dark:focus:ring-offset-none ">
              Download
              <FiDownload
                className="
          w-4 h-4
          "
              />
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Fields;
