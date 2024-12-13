import { JSX } from "react";
import "./Button.scss";

interface IButton {
    onClick: () => void;
    text: string;
}
const Button = ({ onClick, text }: IButton): JSX.Element => {
    return (
        <button
            onClick={onClick}
            className="app-button"
        >
            {text}
        </button>
    );
};

export default Button;