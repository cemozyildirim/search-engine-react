import { useState } from 'react';
import './App.css';
import SearchBar from './assets/js/components/SearchBar';
import searchPhotos from './assets/js/components/SearchPhotos';
import SearchResultsData from './assets/js/components/SearchData';
import './assets/js/main';

function App() {
  const [dataImages, setDataImages] = useState([]);

  const submit = async (data) => {
    const results = await searchPhotos(data);
    setDataImages(results);
    if (results != '' || null) {
      const resultHr = document.querySelector('.search__hr');
      const searchResult = document.querySelector('.search__area');
      resultHr.classList.add('search__hr-visible');
      searchResult.classList.add('search__area-top')
    }
  };

  return (
    <div className='App'>
      <SearchBar searchValue={submit} />
      <SearchResultsData imageResults={dataImages} />
    </div>
  )
}

export default App
