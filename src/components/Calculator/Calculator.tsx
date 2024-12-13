import { JSX, useState } from "react";
import "./Calculator.scss";
import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import CalculatorOutput from "./CalculatorOutput";

const Calculator = (): JSX.Element => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState<number>(0);
    const [error, setError] = useState<string>("");

    const add = (numbers: string): number => {
        if (numbers === "") return 0;

        // Case 1: If the input string contains a single number
        return parseInt(numbers, 10);
    };

    const handleSubmit = (): void => {
        try {
            const sum = add(inputValue);
            setResult(sum);
        } catch (e) {
            if (e instanceof Error) {
                setResult(0);
                setError(e.message);
            } else {
                setResult(0);
                setError('An unknown error occurred.');
            }
        }
    };

    return (
        <div className="app-main">
            <Header />
            <div className="app-content app-container">
                <h1>String Calculator</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                    <Input value={inputValue} onChange={setInputValue} placeholder="Enter string value" />
                    <Button onClick={handleSubmit} text="Submit" />
                </form>
                <CalculatorOutput result={result} error={error} />
            </div>
            <Footer />
        </div>
    );
};

export default Calculator;