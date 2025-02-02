import { useNavigate } from "react-router";
import { BttnTypeEnum } from "../../../../types/button";
import { Button } from "../../../atoms/button";
import "./style.css";

export const Hero = () => {
    const navigate = useNavigate();
    const handleBttnClick = () => {
        navigate("/builder");
    };

    return (
        <div className="flex justify-center w-full h-auto bg-[url('/images/hero-bg.jpg')] font-semibold bg-cover lg:bg-contain overflow-hidden">
            <div className="grid grid-cols-1 gap-5 my-10 px-10 w-full h-auto max-w-7xl lg:gap-x-12 lg:gap-0  lg:my-20 lg:px-10 lg:grid-cols-4 lg:grid-rows-4 lg:h-full 2xl:px-0">
                {/* Text */}
                <div className="flex flex-col  justify-center items-center gap-5 text-center text-white-800 lg:self-start lg:items-start lg:text-left lg:col-span-2 lg:row-span-3">
                    <p className="text-gray-100">
                        <span className="text-green-400 font-bold">1,357</span>{" "}
                        resumes polished today.
                    </p>
                    <h1 className="text-white">
                        Crafted For{" "}
                        <span className="text-green-400 font-mono font-extrabold">
                            IMPACT
                        </span>{" "}
                        : Your Resume, Done Right
                    </h1>
                    <p className="text-lg">
                        You have just
                        <span className="text-green-400 text-2xl font-extrabold">
                            {" "}
                            7{" "}
                        </span>{" "}
                        seconds to make an impression. Let’s build a resume that
                        stands out every time.
                    </p>
                    <Button
                        bttnName={"Create My Winning Resume"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleBttnClick}
                    />
                </div>
                {/* Img */}
                <div className="relative flex justify-center items-center lg:col-span-2 lg:row-span-4 h-[400px] lg:h-auto lg:w-auto">
                    <img
                        className="absolute rounded-xl w-[616px] aspect-[616/413] object-contain drop-shadow-2xl scale-90 -rotate-[10deg] -left-32 md:-left-10 lg:-left-28 lg:scale-105 lg:-rotate-[18deg]"
                        src="/images/hero-resume-1.png"
                    ></img>

                    <img
                        className="absolute rounded-xl w-[616px] aspect-[616/413] object-contain drop-shadow-2xl scale-[.965] lg:scale-[1.15] lg:rotate-[5deg] "
                        src="/images/hero-resume-2.png"
                    ></img>

                    <img
                        className="absolute  rounded-xl w-[616px] aspect-[616/413] object-contain drop-shadow-2xl rotate-[10deg] scale-90 -right-32 md:-right-10 lg:-right-28 lg:scale-105 lg:rotate-[20deg]"
                        src="/images/hero-resume-3.png"
                    ></img>
                </div>
                {/* Stats */}
                <div className="flex flex-col items-center justify-center gap-5 text-left text-white-800 lg:items-start lg:col-span-2 lg:row-span-1">
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="text-green-400 font-bold">2x</h3>
                        <p>more likely to land an interview</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="text-green-400 font-bold">9%</h3>
                        <p>higher salary with your next offer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
