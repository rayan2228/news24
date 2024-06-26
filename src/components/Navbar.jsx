import Img from "./layouts/Img";
import searchImg from "../assets/icons/search.svg";
import categories from "../utils/categories";
import { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/news/newsContext";
import getDateFormatter from "../utils/dateFormat";
import useDebounce from "../utils/hooks/useDebounce";
import List from "./layouts/List";
import ListItem from "./layouts/ListItem";
const Navbar = () => {
  const { setCategory, setSearchTerm } = useContext(NewsContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showSearch, setShowSearch] = useState(false);

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = useDebounce((e) => {
    setSearchTerm(e.target.value);
  }, 800);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [showSearch]);

  return (
    <nav className="py-6 border-b border-black md:py-8">
      <div className="container flex flex-wrap items-center justify-between gap-6 mx-auto">
        {/* date */}
        <div className="flex items-center space-x-4">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.5C12.1421 0.499999 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.499999 3.85786 3.85786 0.5 8 0.5Z"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 15.4286L8 0.571507"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4995 14.9999C10.4995 14.9999 12.5715 12.6429 12.5715 8.00008C12.5715 3.35722 10.4995 0.999939 10.4995 0.999939"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.50049 1.00006C5.50049 1.00006 3.4285 3.35706 3.4285 7.99992C3.4285 12.6428 5.50049 15.0001 5.50049 15.0001"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.4282 8L0.499512 8"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 5C1.5 5 3.5 5 8 5C12.5 5 14.5 5 14.5 5"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.5 11C1.5 11 3.5 11 8 11C12.5 11 14.5 11 14.5 11"
              stroke="#00D991"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {getDateFormatter(currentTime.getTime(), "date", true)}
            {" , "}
            {currentTime.toLocaleTimeString()}
          </span>
        </div>
        {/* Logo */}
        <a onClick={() => handleCategory("")} className="cursor-pointer">
          <h1 className="tracking-[10px] capitalize text-4xl font-workbanch">
            rayan
          </h1>
        </a>
        {/* Logo Ends */}
        {/* */}
        <div className="flex items-center  w-[20%] justify-end gap-3">
          <input
            id="search"
            type="search"
            className={`p-3 transition-all duration-300 border border-green-300 outline-transparent ${
              showSearch
                ? "w-full visible opacity-100"
                : "w-0 invisible opacity-0"
            }`}
            onChange={handleSearch}
          />
          <label htmlFor="search" onClick={handleShowSearch}>
            <Img src={searchImg} alt={"search"} />
          </label>
        </div>
      </div>
      {/* categories */}
      <div className="container mx-auto mt-8">
        <List className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {categories?.map((category) => (
            <ListItem key={category} className="cursor-pointer">
              <a onClick={() => handleCategory(category.toLowerCase())}>
                {category}
              </a>
            </ListItem>
          ))}
        </List>
      </div>
    </nav>
  );
};

export default Navbar;
