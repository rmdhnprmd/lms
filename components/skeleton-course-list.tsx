import { Skeleton } from "./ui/skeleton";

export const SkeletonCourseList = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
              <Skeleton className="rounded-md w-full aspect-video relative overflow-hidden" />
              <div className="flex flex-col pt-2 gap-2">
                <Skeleton className="w-[85%] h-6 text-lg md:text-base" />
                <Skeleton className="w-[60%] h-4" />
                <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                  <div className="flex w-full items-center gap-x-1">
                    <Skeleton className="rounded-full h-5 w-5"/>
                    <Skeleton className="w-[30%] h-4"/>
                  </div>
                </div>
                <Skeleton className="w-full h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
