import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Result = () => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-col space-y-3 border rounded-xl pb-4">
        <Skeleton className="h-[200px] w-[300px] rounded-t-xl" />
        <div className="space-y-2 m-2 mt-3 mb-3">
          <Skeleton className="h-4 rounded-md w-[250px]" />
          <Skeleton className="h-4 rounded-md w-[200px]" />
          <Skeleton className="h-4 rounded-md w-[180px]" />
          <Skeleton className="h-4 rounded-md w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default Result;
