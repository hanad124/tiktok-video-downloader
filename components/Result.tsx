import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import useDownloader from "react-use-downloader";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import prettyBytes from "pretty-bytes";
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
  video: any;
  loader: boolean;
  invalidLink: boolean;
}

import coverPhoto from "@/public/assets/cover.jpeg";

const Result: React.FC<ResultProps> = ({ video, loader, invalidLink }) => {
  const noVideoData = !video || Object.keys(video).length === 0;

  const { percentage, download, isInProgress, size, elapsed, cancel } =
    useDownloader();

  const downloadVideo = (url: string, filename: string) => {
    download(url, `SaveTok-${filename}.mp4`);
  };

  return (
    <>
      <div className="px-4 md:px-0  w-full flex justify-center my-10">
        {noVideoData ? null : (
          <Card className="w-full md: max-w-[400px]">
            <CardHeader>
              <Image
                src={video?.cover || coverPhoto}
                height={200}
                width={300}
                alt={video?.title || "cover"}
                className="max-h-[280px] w-full rounded-xl"
              />
            </CardHeader>

            <CardContent>
              <div className="flex flex-col space-y-2 m-2 mt-3 mb-3">
                <div className="flex justify-start items-center gap-2">
                  <div className=" cursor-pointer rounded-full p-[1px] border-2 border-violet-600/30">
                    <Image
                      src={video.author.avatar}
                      height={30}
                      width={30}
                      alt="Norway"
                      className="rounded-full"
                    />
                  </div>
                  <p className=" cursor-pointer text-left text-gray-600 max-w-[400px] font-semibold">
                    {video.author.nickname} | {video.author.unique_id}
                  </p>
                </div>
                <p className="text-left text-gray-600  max-w-[400px]">
                  {" "}
                  {video.title.slice(0, 80) +
                    (video.title.length > 80 ? "..." : "")}
                </p>
                <div className="flex flex-col items-center space-x-3 mt-6">
                  {isInProgress ? (
                    <>
                      <Progress color="grape" value={percentage} />
                      <div className="flex justify-between items-center mt-2 w-full">
                        <p>{prettyBytes(size)}</p>
                        <p>{percentage}%</p>
                      </div>
                    </>
                  ) : null}
                  {!isInProgress ? (
                    <button
                      color="grape"
                      className="px-3 py-2 w-full mt-4  bg-gradient-to-tl from-blue-600 to-violet-600 text-white rounded-md"
                      onClick={() => downloadVideo(video.play, video.id)}
                    >
                      Download
                    </button>
                  ) : (
                    <button
                      className="rounded-md p-2 px-10 text-white bg-red-500 mt-2"
                      onClick={() => cancel()}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        {loader ? (
          <Card className="w-full md: max-w-[400px]">
            <CardHeader>
              <Skeleton className="h-[280px] w-full rounded-xl" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 rounded-md mt-1 w-[150px]" />
              </div>
              <Skeleton className="h-4 rounded-md mt-2 w-[250px]" />
              <Skeleton className="h-4 rounded-md mt-1 w-[200px]" />
              <Skeleton className="h-4 rounded-md mt-1 w-[150px]" />
            </CardContent>
          </Card>
        ) : null}
        {invalidLink ? (
          <>
            <CardFooter>
              <CardDescription>
                <div className="flex items-center gap-2 bg-red-500/20 px-10 py-3 rounded-md">
                  <FiAlertTriangle className="text-red-500" />
                  <p className="text-red-500">Invalid TikTok link</p>
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
