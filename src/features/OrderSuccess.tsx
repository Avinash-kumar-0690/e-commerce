const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 p-10 rounded text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Order Placed Successfully
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Thank you for shopping with us.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;