import axios from 'axios'


const MY_ACCESS_KEY = "h5y24Jd9-44sZjl4W7UTTyv3MibZPTX0R9xz8M4Kumw";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const pullImages = async (query, page = 1) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                orientation: "squarish",
                updated_at: "desc",
                query: query,
                page,
                per_page: 20,
                client_id: MY_ACCESS_KEY
            }


        })
        return response.data
        
    } catch (error) {
        throw new Error("Image request failed");
    }
    
     
};