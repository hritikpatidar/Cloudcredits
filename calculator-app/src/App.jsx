import Calculator from "./components/Calculator";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
            Advanced Scientific Calculator
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Perform basic and advanced mathematical calculations with
            scientific functions, calculation history, and a modern
            responsive user interface.
          </p>

        </div>

        {/* Calculator */}
        <Calculator />

      </div>

    </div>
  );
}

export default App;