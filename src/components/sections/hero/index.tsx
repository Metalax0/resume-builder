import "./style.css";

export const Landing = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
            <h1 className="text-orange-400">Resume Builder</h1>
            <p className="text-gray-200">
                A browser based tool that assists in building a resume.
            </p>

            <a
                href="https://linktr.ee/metalax.dev"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Details
            </a>

            {/*  */}
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    );
};
