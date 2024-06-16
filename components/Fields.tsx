"use client";

import React, { useState, useEffect } from "react";
import { FiRadio, FiX, FiLoader } from "react-icons/fi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/schemas/index";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useVideo } from "@/store/video";

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
import Result from "./Result";
import { useQueryState } from "next-usequerystate";
import { useImage } from "@/store/image";

const Fields = () => {
  const { toast } = useToast();
  const [clearInput, setClearInput] = useState("");
  const image = useImage((state) => state.image);
  const loading = useImage((state) => state.loading);
  const notImageUrl = useImage((state) => state.notImageUrl);
  const fetchImage = useImage((state) => state.fetchImage);
  const chartData = useImage((state) => state.chartData);
  const [url, setUrl] = useState("url");

  useEffect(() => {
    setClearInput("");
  }, [clearInput]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      url: "",
    },
  });

  useEffect(() => {
    form.setValue("url", url);
  }, [url]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    fetchImage(data.url);

    console.log("data", data);

    if (notImageUrl) {
      toast({
        title: "Invalid Image URL",
        description: "Please enter a valid image URL",
      });
    }
  };

  return (
    <div>
      <div className="mt-8 flex justify-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" flex flex-col md:flex-row gap-x-2 gap-y-4 justify-center items-center w-full mx-6 md:mx-none"
          >
            <div className="flex items-center w-full md:w-auto">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="relative w-full">
                    <FormControl>
                      <>
                        <input
                          type="text"
                          placeholder="Paste image URL here"
                          // value={url}
                          className="items-center  bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 py-3 w-full md:w-[36rem] transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 rounded-md  "
                          onChange={(e) => {
                            e.preventDefault();
                            setUrl(e.target.value);
                          }}
                          // {...field}
                        />
                        <button
                          type="submit"
                          disabled={loading}
                          className={`w-full md:ml-2 md:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-none focus:ring-none py-3 px-4 dark:focus:ring-offset-none 
                          ${
                            loading
                              ? "cursor-not-allowed bg-gradient-to-tlfrom-blue-600/30 to-violet-600/30"
                              : ""
                          }`}
                        >
                          {loading ? (
                            <>
                              <div className="flex items-center gap-x-2">
                                <span>Interferring</span>
                                <FiLoader className="animate-spin w-4 h-4" />{" "}
                              </div>
                            </>
                          ) : (
                            <>
                              <span>Interfer</span>
                              <FiRadio className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>

      <Result
        image={image}
        loader={loading}
        invalidLink={notImageUrl}
        chartData={
          chartData || {
            classes: [],
            confidences: [],
          }
        }
      />
    </div>
  );
};

export default Fields;
