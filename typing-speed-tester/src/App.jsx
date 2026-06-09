import { useEffect, useState } from "react";
import TypingBox from "./components/TypingBox";
import Stats from "./components/Stats";
import paragraphs from "./data/paragraph";

function App() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(60);
  const [started, setStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [selectedTime, setSelectedTime] = useState(60);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const currentParagraph =
    paragraphs[currentParagraphIndex];
  useEffect(() => {
    let timer;

    if (started && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setShowResult(true);
    }

    return () => clearInterval(timer);
  }, [started, time]);

  useEffect(() => {
    if (
      started &&
      time > 0 &&
      time % 60 === 0 &&
      time !== time
    ) {
      setCurrentParagraphIndex((prev) =>
        (prev + 1) % paragraphs.length
      );

      setInput("");
    }
  }, [time]);

  const handleChange = (e) => {
    const value = e.target.value;

    if (
      input.length > currentParagraph.length
    ) {
      return;
    }

    setInput(value);

    if (!started) {
      setStarted(true);
    }

    calculateStats(value);
  };

  const calculateStats = (value) => {
    const words = value.trim()
      ? value.trim().split(/\s+/).length
      : 0;

    const elapsedSeconds = 60 - time;
    const minutes = elapsedSeconds / 60 || 1 / 60;

    setWpm(Math.round(words / minutes));

    let correct = 0;

    for (let i = 0; i < value.length; i++) {
      if (value[i] === currentParagraph[i]) {
        correct++;
      }
    }

    const acc = value.length
      ? Math.round((correct / value.length) * 100)
      : 100;

    setAccuracy(acc);
  };

  const restart = () => {
    setInput("");
    setStarted(false);
    setShowResult(false);

    setTime(selectedTime);
    setSelectedTime(selectedTime);
    setCurrentParagraphIndex(0);

    setWpm(0);
    setAccuracy(100);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8">

      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-3 mt-6 flex-wrap">

          {[60, 300, 600, 900].map((value) => (
            <button
              key={value}
              disabled={started}
              onClick={() => {
                setSelectedTime(value);
                setTime(value);
              }}
              className={`
        px-4 py-2 rounded-xl text-sm
        ${selectedTime === value
                  ? "bg-blue-600"
                  : "bg-slate-800"
                }
      `}
            >
              {value / 60} Min
            </button>
          ))}

        </div>
        {!showResult ? (
          <>
            {/* Header */}
            <div className="text-center mb-10">

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Typing Speed Tester
              </h1>

              <p className="text-gray-400 mt-4">
                Test your typing speed and accuracy in 60 seconds
              </p>

            </div>

            {/* Stats */}
            <Stats
              input={input}
              wpm={wpm}
              accuracy={accuracy}
              time={time}
            />

            {/* Typing Area */}
            <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">

              <TypingBox
                text={currentParagraph}
                input={input}
                handleChange={handleChange}
              />

            </div>

            {/* Restart Button */}
            <div className="flex justify-center mt-8">

              <button
                onClick={restart}
                className="
                  px-8
                  py-3
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  hover:scale-105
                  transition
                "
              >
                Restart Test
              </button>

            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[80vh]">

            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">

              <h2 className="text-5xl md:text-6xl font-bold text-green-400">
                🎉 Completed
              </h2>

              <p className="text-gray-400 mt-4">
                Your typing test results
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-10">

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-5xl font-bold text-blue-400">
                    {wpm}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    WPM
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-5xl font-bold text-green-400">
                    {accuracy}%
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Accuracy
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-5xl font-bold text-purple-400">
                    {input.length}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    Characters
                  </p>
                </div>

              </div>

              <button
                onClick={restart}
                className="
                  mt-10
                  px-10
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-600
                  hover:scale-105
                  transition
                "
              >
                Try Again
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;