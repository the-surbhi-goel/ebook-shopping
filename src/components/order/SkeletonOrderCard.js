import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonOrderCard = () => {
  return (
    <div className="w-full max-w-full py-5 px-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 dark:text-white">
      <div>
        <Skeleton width="70px" />
      </div>
      <div className="flex flex-col laptop:flex-row justify-between">
        <div>
          Order ID: <Skeleton width="70px" />
        </div>
        <div>
          Amount: <i className="bi bi-currency-rupee"></i>
          <Skeleton width="70px" />
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          Name: <Skeleton width="70px" />
        </div>
        <div>
          Contact No. : <Skeleton width="70px" />
        </div>
      </div>
      {/* Order */}
      <div className="flex flex-col relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row my-5  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <svg
          className="object-cover w-full rounded-t-lg  h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Skeleton width="70px" />
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <Skeleton count={2} />
          </p>

          <div className="my-4 select-none">
            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
              <Skeleton width="70px" />
            </span>
          </div>

          <div className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            <i className="bi bi-currency-rupee"></i> <Skeleton width="70px" />
          </div>
        </div>
      </div>
    </div>
  );
};
