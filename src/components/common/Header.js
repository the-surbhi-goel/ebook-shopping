import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { LoggedInDropdown } from "./LoggedInDropdown";
import { LoggedOutDropdown } from "./LoggedOutDropdown";
import PATH from "../../constants/path";
import { useCart } from "../../context-reducer";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const [showSearch, setShowSearch] = useState(false);
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("token")) ? true : false);
  const [showDropdown, setDropdown] = useState(false);
  const { cartList } = useCart();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="relative">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 max-h-8 mr-2" alt="EBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              eBook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <i className="bi bi-brightness-high cursor-pointer dark:text-white"></i>
              ) : (
                <i className="bi bi-moon-stars-fill cursor-pointer dark:text-white"></i>
              )}
            </span>
            <span onClick={() => setShowSearch(!showSearch)}>
              <i className="bi bi-search cursor-pointer dark:text-white"></i>
            </span>
            <Link to={PATH.cart}>
              <i className="bi bi-cart-fill cursor-pointer dark:text-white relative">
                <span className="absolute text-sm -top-3 left-2.5 bg-blue-300 px-1 rounded-full text-slate-800">
                  {cartList.length}
                </span>
              </i>
            </Link>
            <span onClick={() => setDropdown(!showDropdown)}>
              <i className="bi bi-person-circle cursor-pointer dark:text-white"></i>
            </span>
          </div>
        </div>
      </nav>
      {showDropdown &&
        (login ? (
          <LoggedInDropdown setDropdown={setDropdown} setLogin={setLogin} />
        ) : (
          <LoggedOutDropdown setDropdown={setDropdown} />
        ))}

      {showSearch && <Search setShowSearch={setShowSearch} />}
    </header>
  );
};
