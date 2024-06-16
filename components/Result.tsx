import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import useDownloader from "react-use-downloader";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import prettyBytes from "pretty-bytes";
import ApexChart from "./Chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FiAlertTriangle } from "react-icons/fi";

interface ResultProps {
  image: any;
  chartData: {
    classes: string[];
    confidences: number[];
  };
  loader: boolean;
  invalidLink: boolean;
}

import coverPhoto from "@/public/assets/cover.jpeg";

const Result: React.FC<ResultProps> = ({
  image,
  loader,
  invalidLink,
  chartData,
}) => {
  const noImageData = !image || Object.keys(image).length === 0;

  console.log("image", image);

  return (
    <>
      <div className="px-4 md:px-0  w-full flex justify-center my-10">
        {noImageData ? null : (
          <Card className=" w-full md:w-[43rem]">
            <CardHeader>
              <Image
                src={image || coverPhoto}
                height={300}
                width={400}
                alt={"inference result"}
                className="max-h-[480px] w-full rounded-xl"
              />
            </CardHeader>

            <CardContent>
              <div className=" m-2 mt-3 mb-3">
                <CardTitle>
                  <h1 className="text-2xl font-semibold">Inference Results</h1>
                </CardTitle>
                {/* 
                display the chart data as list items
                 */}
                <ul className="space-y-2">
                  {chartData.classes.map((name, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>{name}</p>
                      <p>{chartData.confidences[index].toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
        {loader ? (
          <Card className="w-full md: max-w-[43rem]">
            <CardHeader>
              <Skeleton className="h-[380px] w-full rounded-xl" />
            </CardHeader>
            {/* chart skeleton */}
            <CardContent>
              <div className="flex flex-col space-y-2 m-2 mt-3 mb-3">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            </CardContent>
          </Card>
        ) : null}
        {invalidLink ? (
          <>
            <CardFooter>
              <CardDescription>
                <div className="flex items-center gap-4 bg-red-500/20 px-10 py-3 rounded-md">
                  <FiAlertTriangle className="text-red-500 text-xl" />
                  <p className="text-red-500">
                    Invalid link. Please enter a valid link
                  </p>
                </div>
              </CardDescription>
            </CardFooter>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Result;
