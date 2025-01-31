import s from "./ErrorMessage.module.css";

import { MdSettingsSuggest } from "react-icons/md";

const ErrorMessage = () => {

    return <p className={s.alarm}> <MdSettingsSuggest /> {"Image request failed. Please try again later."}</p>
 
}

export default ErrorMessage;