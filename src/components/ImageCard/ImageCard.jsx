import s from "./ImageCard"
const ImageCard = ({ image, onClick }) => {
    if (!image || !image.urls) {
        return null;
    }
    return <div onClick={onClick}>
        <img className= {s.img} src={image.urls.small} alt={image.alt_description} />
    </div>
}

export default ImageCard


