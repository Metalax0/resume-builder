import "./style.css";

export const Landing = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
            <h1 className="text-orange-400">Resume Builder</h1>
            <p className="text-gray-200">
                A browser based tool that assists in building a resume.
            </p>

            {/*  */}
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    );
};
