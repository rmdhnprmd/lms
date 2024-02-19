import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonInfoCard = () => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <Skeleton className="rounded-full h-10 w-10" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
};
