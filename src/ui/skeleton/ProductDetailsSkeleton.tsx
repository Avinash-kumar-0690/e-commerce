const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black animate-pulse">
      <div className="w-11/12 mx-auto py-6 flex flex-col md:flex-row gap-6 md:gap-10">
        
        {/* IMAGE SECTION */}
        <div className="w-full md:w-2/5 md:sticky md:top-20 self-start">
          <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
            
            {/* Image */}
            <div className="w-full h-64 md:h-96 bg-gray-300 dark:bg-gray-700 rounded"></div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <div className="flex-1 h-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="flex-1 h-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="w-full md:w-3/5 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-5 md:p-8 space-y-6">
          
          {/* Title */}
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>

          {/* Rating */}
          <div className="flex gap-2">
            <div className="h-6 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Price */}
          <div className="flex gap-3">
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Policies */}
          <div className="space-y-2 pt-4 border-t dark:border-gray-700">
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Reviews */}
          <div className="pt-6 border-t dark:border-gray-700 space-y-4">
            <div className="h-5 w-40 bg-gray-300 dark:bg-gray-700 rounded"></div>

            {[1, 2].map((_, i) => (
              <div key={i} className="border dark:border-gray-700 rounded p-4 space-y-2">
                <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;