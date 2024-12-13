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
        // Case 1: Empty string
        if (numbers === "") return 0;
        // Replace "\\n" from e.target.value with actual newline character
        numbers = numbers.replace(/\\n/g, '\n');
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const match = numbers.match(/^\/\/(.+?)\n/);
            if (match) {
                delimiter = new RegExp(match[1]);
                numbers = numbers.slice(match[0].length);
            }
        }

        // Multiple Numbers Split by comma or newline
        const numArray = numbers
            .split(delimiter)
            .map(Number);

        const negatives = numArray.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed ${negatives.join(",")}`);
        }

        return numArray.reduce((sum, num) => sum + num, 0);
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