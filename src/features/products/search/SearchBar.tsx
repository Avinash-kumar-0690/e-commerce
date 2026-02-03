import {useState} from "react";
import {useNavigate} from "react-router-dom"

const SearchBar = () => {
  const [searchValue,setSearchValue] =useState<string>("")
  const navigate = useNavigate()

  const searchProducts = (q?:string):void => {
    let query = q ?? searchValue.trim();
    if(!query){
      return
    }
    else {
      navigate(`products/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="relative w-1/3">
      <div className="bg-white rounded-md flex">
        <input
          type="text"
          className="w-full p-2 outline-none text-black"
          placeholder="Search products..."
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target.value)}
          onKeyDown={(e => {
            if(e.key === "Enter"){
              searchProducts()
            }
          })}
        />

        <button className="px-4 bg-black text-white"
        onClick={() => searchProducts()}
        >Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
