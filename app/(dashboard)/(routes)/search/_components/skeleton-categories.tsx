import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCategories = () => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="rounded-full flex items-center py-[3px] gap-x-1">
          <Skeleton className="py-2 px-3 h-8 w-36 rounded-full" />
        </div>
      ))}
    </div>
  );
};
