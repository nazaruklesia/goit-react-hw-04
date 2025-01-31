import s from "./ImageCard.module.css"
const ImageCard = ({ image, onClick }) => {
    if (!image || !image.urls) {
        return null;
    }
    return <div onClick={onClick}>
        <img className={s.img} src={image.urls.small} alt={image.alt_description || "Image"} />

    </div>
}

export default ImageCard


