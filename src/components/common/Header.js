import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
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
                <i class="bi bi-moon-stars-fill cursor-pointer dark:text-white"></i>
              )}
            </span>
            <span>
              <i className="bi bi-search cursor-pointer dark:text-white"></i>
            </span>
            <Link to="/">
              <i className="bi bi-cart-fill cursor-pointer dark:text-white"></i>
            </Link>
            <span>
              <i className="bi bi-person-circle cursor-pointer dark:text-white"></i>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
