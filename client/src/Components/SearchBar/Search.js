import React from "react";


 const Search =(props) => {
    return (
      <div>
      <div class="wrap">
      <div class="search">
         <input type="text" class="searchTerm" placeholder="What are you looking for?"/>>
         <button type="submit" class="searchButton">
           <i class="fa fa-search"></i>
        </button>
      </div>
   </div>
      </div>
    )
};
export default Search;