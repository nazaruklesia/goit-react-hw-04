import Modal from 'react-modal';
import s from "./ImageModal.module.css"
import { FaRegUserCircle } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { RiInformationOffFill } from "react-icons/ri";


Modal.setAppElement("#root");
const ImageModal = ({ isOpen, image, isClose }) => {
    if (!image)
        return null;


     const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            isClose();
        }
     };
    
    return (
         <Modal className={s.overlay} isOpen={isOpen} onRequestClose={isClose} shouldCloseOnOverlayClick={true}>
        <div className={s.overlay} onClick={handleOverlayClick}>
            <div className={s.modal} >
                    <div className={s.contant} >
                        <img className={s.imgModal} src={image.urls.regular} alt={image.alt_description} />
                        <button className={s.closeBtn} onClick={isClose}> X  </button>
                    </div>
                    <div>
                        <p> <FaRegUserCircle /> Author: {image.user.name}</p>
                        <p>  <BiLike /> Likes: {image.likes}</p>
                        <p> <RiInformation2Line />Description:  {image.alt_description || <RiInformationOffFill />}</p>
                </div>
            </div>
        </div>
      </Modal>
    )
}
export default ImageModal;





