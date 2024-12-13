import { JSX } from "react";
import "./Input.scss";

interface IInput {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};
const Input = ({ value, onChange, placeholder }: IInput): JSX.Element => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="app-input"
        />
    );
};

export default Input;