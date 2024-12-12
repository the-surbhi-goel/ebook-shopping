import PATH from "../../constants/path";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const OrderSuccess = ({ id }) => {
  return (
    <section className="flex justify-center">
      <div className="text-center max-w-sm bg-white border border-gray-200 px-10 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={Logo} alt="success" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Thank you for Order!
          </h5>
          <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Your Order Id is {id}</p>
          <Link
            to={PATH.products}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-gray-900 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-blue-800"
          >
            Explore eBooks
          </Link>
        </div>
      </div>
    </section>
  );
};
