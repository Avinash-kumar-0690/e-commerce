const ProductCardSkeleton = () => {
  return (
    <div
      className="
        rounded-lg border
        bg-white dark:bg-[#1f1f1f]
        flex flex-col
        animate-pulse
      "
    >
      {/* IMAGE SKELETON */}
      <div className="p-4 flex justify-center items-center bg-gray-50 dark:bg-[#2a2a2a] rounded-t-lg">
        <div className="h-36 w-full bg-gray-200 dark:bg-gray-700 rounded" />
      </div>

      {/* DETAILS SKELETON */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* category */}
        <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />

        {/* title (2 lines) */}
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />

        {/* price */}
        <div className="mt-auto">
          <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
