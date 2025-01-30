import ImageCard from "../ImageCard/ImageCard"


const ImageGallery = ({images, onImageClick}) => {
    return (
        <ul>
        {images.map((image) => (
            <li key={image.id}>
                <ImageCard key={image.id} image={ image} onClick={()=>onImageClick(image)} />
            </li>
        ))}
        </ul>
    )

}

export default ImageGallery




