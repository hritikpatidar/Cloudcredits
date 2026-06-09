const Stats = ({ input, wpm, accuracy, time }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

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

            <div className="bg-slate-800 rounded-2xl p-6">
                <h3 className="text-5xl font-bold text-orange-400">
                    {time / 60 * 60}
                </h3>
                <p className="mt-2 text-gray-400">
                    Seconds
                </p>
            </div>

        </div>
    );
};

export default Stats;