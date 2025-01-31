import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({images, handleImageClick}) => {
    return (
        <ul className={s.gallary} >
        {images.map((image) => (
            <li key={image.id}>
                <ImageCard image={ image} onClick={()=>handleImageClick(image)} />
            </li>
        ))}
        </ul>
    )
}
export default ImageGallery




