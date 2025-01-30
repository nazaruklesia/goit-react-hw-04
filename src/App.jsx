
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import {pullImages} from './api.js'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ImageGallery from './components/ImageGallery/ImageGallery.jsx'
import Loader from './components/Loader/Loader.jsx'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx'





function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chosenImage, setChosenImage] = useState(null);
  const [totalPage, setTotalPage] = useState(1);

  
  const handleSearch = (newQuery) => {
    if (query === newQuery) return;
    setQuery(newQuery)
    setImages([])
      setPage(1)
  }

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { results, total_page, } = await pullImages(query, page);
        setImages((prev) => (page === 1 ? results : [...prev, ...results]));
        setTotalPage(total_page)


      } catch (error) {
        setError("Image request failed. Please try again.");
          toast.error("Image request failed. Please try again.");
        
        
      } finally {
        setIsLoading(false)
      }
      
    };
    getImages();
   
  }, [query, page]);
  
  const handleLoadMore = () => setPage((prev) => prev + 1);
  const handleEmageClick = (image) => setChosenImage(image);
  const handleCloseModal = () => setChosenImage(null);

  


  return (

    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster/>
      {error && <ErrorMessage message= {error} />}
      <ImageGallery images={ images} onImageClick={handleSearch}/>
          

        {isLoading && <Loader/>}
      {images.length > 0 && page < totalPage && (
        <LoadMoreBtn onClick={handleLoadMore} />
          // <button onClick={() => setPage((prev) => prev + 1)}>
          //   Load more
          // </button>
        )}
        
      </div>


  );
}

export default App
