import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type Product = {
  id: number;
  title: string;
};

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const debounceRef = useRef<number | null>(null);

  // 🔹 Existing logic (slightly improved)
  const handlesearchProducts = (q?: string): void => {
    const query = (q ?? searchValue).trim();
    if (!query) return;

    setResults([]);
    setActiveIndex(-1);
    navigate(`products/search?q=${encodeURIComponent(query)}`);
  };

  // 🔹 Fetch suggestions (NEW)
  const fetchSuggestions = async (value: string) => {
    if (!value.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${value}&limit=5`
    );
    const data = await res.json();
    setResults(data.products);
    setLoading(false);
  };

  // 🔹 Debounce input (NEW)
  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = window.setTimeout(() => {
      fetchSuggestions(searchValue);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [searchValue]);

  // 🔹 Keyboard navigation (NEW)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;

      case "Enter":
        if (activeIndex >= 0) {
          e.preventDefault();
          handlesearchProducts(results[activeIndex].title);
        }
        break;

      case "ArrowRight":
        if (activeIndex >= 0) {
          e.preventDefault();
          setSearchValue(results[activeIndex].title);
          setResults([]);
          setActiveIndex(-1);
        }
        break;
    }
  };

  return (
    <div className="relative w-1/3 mt-3 xs:max-sm:w-3/4 xs:max-ss:w-3/4 mb-2 base:max-sm:order-2  ">
      <div className="bg-white rounded-md border-2 flex xs:max-sm:border-blue-900 ">
        <input
          type="text"
          name="searchInput"
          className="w-full p-2 outline-none text-black "
          placeholder="Search products..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
        />

        <button
          className="px-4 bg-black text-white"
          onClick={() => handlesearchProducts()}
        >
          Search
        </button>
      </div>

      {/* 🔹 Suggestions dropdown (NEW) */}
      {loading && (
        <div className="absolute bg-white border w-full p-2">
          Loading...
        </div>
      )}

      {results.length > 0 && (
        <ul className="absolute w-full bg-white border z-10">
          {results.map((item, index) => (
            <li
              key={item.id}
              className={`px-3 py-2 cursor-pointer ${
                index === activeIndex ? "bg-gray-200" : ""
              }`}
              onMouseDown={() => handlesearchProducts(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
