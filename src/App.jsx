
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import {pullImages} from './api.js'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'





function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = (newQuery) => {
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
        const { results } = await pullImages(query, page);
        setImages((prevImages) => [...prevImages, ...results]);

      } catch (error) {
        setError("Image request failed. Try again.");
          toast.error("Image request failed. Try again.");
        
        
      } finally {
        setIsLoading(false)
      }
      
    };
    getImages();
   
      
  }, [query, page]);
  
  

  return (

    <div>
      <SearchBar onSubmit={handleSearch} />
      
      {error && <p>{error}</p>}

      <div>
        {
          images.length > 0 ? (
            images.map((image) => (
        
              <div key={image.id}>
                <img src={image.urls.small} alt={image.description} />
              </div>
            ))
          ) : (<p>No images found</p>)}

        {isLoading && <p>Loading...</p>}
        {images.length > 0 && (
          <button onClick={() => setPage((prev) => prev + 1)}>
            Load more
          </button>
        )}
        
      </div>
    </div>

  );
}

export default App
