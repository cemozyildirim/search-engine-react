function SearchItems({ variableValue }) {
    return <div className="search__items">
        <img src={variableValue.urls.small_s3} alt={variableValue.alt_description} />
    </div>;
}

export default SearchItems;