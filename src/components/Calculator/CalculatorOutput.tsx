import { JSX } from "react";

interface ICalculatorOutput {
    result: number;
    error: string;
}
const CalculatorOutput = ({ result, error }: ICalculatorOutput): JSX.Element => {
    return (
        <div className="calculator-output">
            {error ? (
                <div style={{ color: 'red' }}>
                    Error: {error}
                </div>
            ) : (
                <div>
                    Result: {result}
                </div>
            )}
        </div>
    );
};

export default CalculatorOutput;