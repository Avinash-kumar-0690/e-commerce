import Button from "../common/Button";
import WebLogoImg from "../assets/react.svg";
import "./Header.css";
import useTheme from "../hooks/useTheme";
import SearchBar from "../features/products/search/SearchBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/store/hooks";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const handleSignup = () => {};

  // Handle Cart Nagivate Logic
  const handleCart = () => {
    navigate("/cart");
  };
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <>
      <header className="sticky top-0 transition-all shadow-md z-10 ">
        <section className="header-section bg-blue-700 flex pr-16 pl-24 justify-between py-4 dark:bg-[#14102d]">
          <div className="websiteLogo">
            <img src={WebLogoImg} alt="The path is wrong." />
          </div>
          <SearchBar />
          <div className=" flex justify-center items-center gap-9">
            <div className="flex gap-5 cursor-pointer items-center dark:text-white">
              <div className="flex justify-center">
                <Button
                  label="Sign Up"
                  onClick={handleSignup}
                  className=" px-6 py-2 rounded-md font-semibold bg-white text-blue-700 hover:bg-blue-50
                   dark:bg-indigo-500 dark:text-white 
                   dark:hover:bg-indigo-400 transition-colors"
                />
              </div>
              <div className="cart">
                <Link to="/cart" className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                    onClick={handleCart}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
            {/* dark Mode SVG */}
            <div>
              <button
                className="relative items-center flex"
                onClick={toggleTheme}
              >
                {theme !== "dark" ? (
                  // Dark Mode SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                ) : (
                  // Light Mode SVG
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
