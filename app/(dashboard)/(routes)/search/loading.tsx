import { SearchInput } from "@/components/search-input";
import { SkeletonCategories } from "./_components/skeleton-categories";
import { SkeletonCourseList } from "@/components/skeleton-course-list";

const Loading = () => {
  return ( 
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-6">
        <SkeletonCategories />
        <SkeletonCourseList />
      </div>
    </>
   );
}
 
export default Loading;