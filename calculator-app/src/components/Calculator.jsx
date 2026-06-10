import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import CalculationHistory from "./CalculationHistory";

const buttons = [
    "C", "⌫", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", "√",
];

const Calculator = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [memory, setMemory] = useState(0);

    const calculate = () => {
        try {
            let exp = input
                .replace(/π/g, Math.PI);

            const result = eval(exp);
            if (result === undefined) return;
            setHistory(prev => [
                `${input} = ${result}`,
                ...prev.slice(0, 9),
            ]);

            setInput(String(result));
        } catch {
            setInput("Error");
        }
    };

    const handleClick = (btn) => {
        switch (btn) {
            case "=":
                calculate();
                break;
            case "C":
                setInput("");
                break;
            case "⌫":
                setInput(input.slice(0, -1));
                break;
            case "√":
                setInput(String(Math.sqrt(Number(input))));
                break;
            case "x²":
                setInput(String(Math.pow(Number(input), 2)));
                break;
            case "x³":
                setInput(String(Math.pow(Number(input), 3)));
                break;
            case "%":
                setInput(String(Number(input) / 100));
                break;
            case "sin":
                setInput(String(Math.sin(Number(input))));
                break;
            case "cos":
                setInput(String(Math.cos(Number(input))));
                break;
            case "tan":
                setInput(String(Math.tan(Number(input))));
                break;
            case "log":
                setInput(String(Math.log10(Number(input))));
                break;
            case "ln":
                setInput(String(Math.log(Number(input))));
                break;
            case "MC":
                setMemory(0);
                break;
            case "MR":
                setInput(String(memory));
                break;
            case "M+":
                setMemory(memory + Number(input || 0));
                break;
            case "M-":
                setMemory(memory - Number(input || 0));
                break;
            default:
                setInput(input + btn);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">

            <div className="w-full max-w-5xl grid lg:grid-cols-[400px_1fr] gap-6">
                {/* Calculator */}
                <div className="bg-slate-900 rounded-[30px] p-5 shadow-2xl border border-slate-700">

                    <Display value={input} />

                    {/* Scientific */}
                    <div className="grid grid-cols-4 gap-2 mb-4">

                        {[
                            "sin",
                            "cos",
                            "tan",
                            "log",
                            "ln",
                            "x²",
                            "x³",
                            "π",
                        ].map((btn) => (
                            <button
                                key={btn}
                                onClick={() => handleClick(btn)}
                                className="
                                    h-11
                                    rounded-xl
                                    bg-slate-800
                                    text-gray-300
                                    hover:bg-slate-700
                                    text-sm
                                "
                            >
                                {btn}
                            </button>
                        ))}

                    </div>

                    {/* Main Buttons */}
                    <div className="grid grid-cols-4 gap-3">

                        {buttons.map((btn) => (
                            <Button
                                key={btn}
                                text={btn}
                                onClick={handleClick}
                            />
                        ))}

                    </div>

                </div>

                {/* History */}
                <CalculationHistory history={history} />

            </div>

        </div>
    );
};

export default Calculator;