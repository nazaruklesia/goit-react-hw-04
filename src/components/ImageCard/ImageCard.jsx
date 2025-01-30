
const ImageCard = ({ image, onClick }) => {
    if (!image || !image.urls) {
        return null;
    }
    return <div onClick={onClick}>
        <img src={image.urls.small} alt={image.alt_description} />
    </div>
}

export default ImageCard


