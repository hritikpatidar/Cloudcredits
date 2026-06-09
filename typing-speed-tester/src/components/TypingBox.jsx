const TypingBox = ({
    text,
    input,
    handleChange,
}) => {
    return (
        <>
            <div
                className="
          bg-slate-800
          p-6
          rounded-2xl
          text-lg
          leading-9
          mb-6
          min-h-[180px]
          break-words
        "
            >
                {text.split("").map((char, index) => {
                    let className = "text-gray-500";

                    if (index < input.length) {
                        className =
                            input[index] === text[index]
                                ? "text-green-400"
                                : "text-red-400";
                    }

                    if (index === input.length) {
                        className =
                            "bg-yellow-400 text-black rounded px-[2px]";
                    }

                    return (
                        <span
                            key={index}
                            className={className}
                        >
                            {char}
                        </span>
                    );
                })}
            </div>

            <textarea
                value={input}
                onChange={handleChange}
                placeholder="Start typing..."
                className="
          w-full
          h-40
          p-4
          rounded-2xl
          bg-slate-800
          border
          border-slate-700
          outline-none
          resize-none
          focus:border-blue-500
        "
            />
        </>
    );
};

export default TypingBox;