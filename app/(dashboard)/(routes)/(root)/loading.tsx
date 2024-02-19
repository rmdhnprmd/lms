import { SkeletonCourseList } from "@/components/skeleton-course-list";
import { SkeletonInfoCard } from "./_components/skeleton-info-card";

const Loading = () => {
  return (
    <div className="p-6 space-y-4" key={Math.random()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkeletonInfoCard/>
        <SkeletonInfoCard/>
      </div>
      <SkeletonCourseList />
    </div>
  );
};

export default Loading;
