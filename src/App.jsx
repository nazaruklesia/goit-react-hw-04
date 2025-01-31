import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import {pullImages} from './api.js'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import Loader from './components/Loader/Loader.jsx'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx'
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx'



function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chosenImage, setChosenImage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  
  const handleSearch = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery)
    setImages([])
      setPage(1)
  }

  useEffect(() => {
     console.log("Current Page:", page, "Total Pages:", totalPages);
    if (!query) {
      return;
    }



    const getImages = async () => {
      setIsLoading(true);
      setError(null);

   try {
     const { results, total_pages } = await pullImages(query, page);
    setImages(prev => [...(page === 1 ? [] : prev), ...results]);
    setTotalPages(total_pages > 1 ? total_pages : page + 1);
} catch (error) {
    setError(true);
} finally {
    setIsLoading(false);
}

    };
    getImages();
  }, [query, page]);
  
  const handleLoadMore = () => setPage((prev) =>  prev + 1);
  const handleImageClick = (image) => setChosenImage(image);
  const handleCloseModal = () => setChosenImage(null);

  return (

    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster/>
      {error && <ErrorMessage message= {error} />}
      <ImageGallery images={ images} onImageClick={handleImageClick}/>
          
        {isLoading && <Loader/>}
     {images.length > 0 && page < totalPages && ( <LoadMoreBtn onClick={handleLoadMore} />)}
      </div>

  );
}

export default App
