import { useState } from "react";

function SearchBar({ searchValue }) {
    const [searchInputValue, setSearchInputValue] = useState('');

    const handleSearchSubmit = (noRefresh) => {
        noRefresh.preventDefault();
        searchValue(searchInputValue);
    };

    const enteredValue = (onChangeValue) => {
        setSearchInputValue(onChangeValue.target.value);
    }

    return <div className="search">
        <form className="search__area" onSubmit={handleSearchSubmit}>
            <img className="search__logo" src="./src/assets/images/new-logo.png" alt="Let's Discover" />
            <label htmlFor="searchBar">Let's discover...</label>
            <input type="text" name="searchBar" value={searchInputValue} onChange={enteredValue} placeholder="...Search Images..." />
            <button>Search</button>
        </form>
    </div>;
}

export default SearchBar;