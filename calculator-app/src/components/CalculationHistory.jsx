const CalculationHistory = ({ history }) => {
    return (
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-700">

            <h2 className="text-2xl font-bold text-white mb-5">
                History
            </h2>

            <div className="space-y-3 max-h-[600px] overflow-auto">

                {history.length === 0 ? (
                    <p className="text-gray-500">
                        No calculations yet
                    </p>
                ) : (
                    history.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-slate-800
                rounded-xl
                p-4
                text-gray-300
              "
                        >
                            {item}
                        </div>
                    ))
                )}

            </div>

        </div>
    );
};

export default CalculationHistory;