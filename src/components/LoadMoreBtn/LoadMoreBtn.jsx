import s from "./LoadMoreBtn.module.css"
import { RxDoubleArrowDown } from "react-icons/rx";

const LoadMoreBtn = ({ onClick, disabled }) => {
    return <button onClick={onClick} disabled={disabled} className={s.button}>
        Load more
        <RxDoubleArrowDown />
    </button>
}

export default LoadMoreBtn;