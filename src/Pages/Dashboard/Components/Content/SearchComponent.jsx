// import  from 'react'
import searchBar from "./assetss/Search.png";
import "./SearchComponent.css";

const SearchComponent = () => {
  return (
    <div className="aasearch-bar">
      <img src={searchBar} alt="ja slkdfl" />
      <input type="text" placeholder="Search here..." name="" id="" />
    </div>
  );
};

export default SearchComponent;
