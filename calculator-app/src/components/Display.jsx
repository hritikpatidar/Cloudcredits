const Display = ({ value }) => {
  return (
    <div className="mb-5">
      <div
        className="
          min-h-24
          bg-slate-950
          border
          border-slate-700
          rounded-3xl
          flex
          items-end
          justify-end
          p-4
          overflow-hidden
        "
      >
        <div
          className="
            w-full
            text-right
            text-white
            font-light
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            break-all
            overflow-x-auto
            scrollbar-none
          "
        >
          {value || "0"}
        </div>
      </div>
    </div>
  );
};

export default Display;