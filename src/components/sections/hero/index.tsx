import "./style.css";

export const Hero = () => {
    return (
        <div className="flex justify-center w-full h-full bg-[#5c65d3]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 w-full h-full max-w-7xl">
                {/* Text */}
                <div className="flex flex-col items-start justify-center gap-5 text-left text-white-800  md:col-span-2">
                    <p>21,000 resumes created today</p>
                    <h2>The professional resume builder</h2>
                    <p className="text-lg">
                        Only 2% of resumes win. Yours will be one of them. Let's
                        build you a resume that works
                    </p>
                    <button> Create my resume</button>
                </div>
                {/* Img */}
                <div className="flex justify-center items-center md:col-span-2">
                    <img
                        className="rounded-xl border-4 w-3/2 h-auto"
                        src="src/assets/image-placeholder.jpg"
                    ></img>
                </div>
                {/* Stats */}
                <div className="flex flex-col items-center bg-green-500 md:col-span-2">
                    <div>
                        <h3>39%</h3>
                        <p>more likely to get hire</p>
                    </div>
                    <div>
                        <h3>8%</h3>
                        <p>better pay with your next job</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
