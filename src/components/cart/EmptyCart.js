import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Button } from "../common";
import PATH from "../../constants/path";

export const EmptyCart = () => {
  return (
    <div className="max-w-sm bg-white border mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
      <img className="rounded-t-lg mx-auto w-3/5" src={Logo} alt="Empty Cart" />
      <div className="p-5">
        <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your Cart is Empty
        </h5>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          Explore our wide selection and find something you like
        </p>
        <Link to={PATH.products}>
          <Button>Explore EBooks</Button>
        </Link>
      </div>
    </div>
  );
};
