import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-58 h-64 bg-white/10 backdrop-blur-lg rounded-lg box-border">
      <Skeleton className="w-48 h-52 rounded-2xl rounded-t-2xl pt-2" />
      <div className="space-y-2">
        <Skeleton className="h-2 w-42" />
      </div>
    </div>
  );
};

export default SkeletonCard;
