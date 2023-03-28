import close from "../../assets/close.svg";
import "./style.css"

export default function CardCookies({
    cookieText,
    buttonText,
    cookieImage,
    buttonColor
}) {
    return (
        <div className="card-cookie">
            <img className="img-close" src={close} alt="close" />
            <img className="img-cookie" src={cookieImage} alt="cookie" />
            <p>{cookieText}</p>
            <button className={buttonColor}>{buttonText}</button>
        </div>
    );
};