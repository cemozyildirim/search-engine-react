import SearchItems from "./SearchItems";

const SearchResultsData = ({ imageResults }) => {
    return <div className="search__results-wrapper">
        <div className="search__hr"><hr /></div>
        <div className="search__results">        {imageResults.map((dataImages, index) => {
            return <SearchItems key={index} variableValue={dataImages} />
        })}</div>
    </div>;
};


export default SearchResultsData;