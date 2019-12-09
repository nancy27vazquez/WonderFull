import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form className="uk-search search-home xl-padding-large ">
            <div className="uk-width-large">
                <span className="uk-form-icon uk-search-icon-flip xr-padding-large xr-padding-large" uk-icon="icon: search"></span>
                <input className="uk-search-input" type="search" placeholder="Looking for something WonderFull?"/>
            </div>
      </form>
    </div>
  );
};                                                                                                                                          

export default SearchBar;

