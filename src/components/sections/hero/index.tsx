import { BttnTypeEnum } from "../../../types/button";
import { Button } from "../../atoms/button";
import "./style.css";

export const Hero = () => {
    const handleBttnClick = () => {};

    return (
        <div className="flex justify-center w-full h-auto bg-[#2b4488] font-semibold">
            <div className="grid grid-cols-1 gap-10 my-10 px-10 w-full h-auto max-w-7xl lg:gap-x-12 lg:gap-0  lg:my-20 lg:px-10 lg:grid-cols-4 lg:grid-rows-4 lg:h-full 2xl:px-0">
                {/* Text */}
                <div className="flex flex-col justify-center items-center gap-5 text-center text-white-800 lg:self-start lg:items-start lg:text-left lg:col-span-2 lg:row-span-3">
                    <p className="text-gray-100">
                        <span className="text-green-400 font-bold">1,357</span>{" "}
                        resumes created today
                    </p>
                    <h1 className="text-white">
                        The{" "}
                        <span className="text-green-400 font-bold">
                            Professional
                        </span>{" "}
                        Resume Builder
                    </h1>
                    <p className="text-lg">
                        Only
                        <span className="text-green-400 font-bold"> 2%</span> of
                        resumes win. Yours will be one of them. Let's build you
                        a resume that works
                    </p>
                    <Button
                        bttnName={"Create My Resume"}
                        bttnType={BttnTypeEnum.primary}
                        bttnAction={handleBttnClick}
                    />
                </div>
                {/* Img */}
                <div className="flex justify-center items-center lg:col-span-2 lg:row-span-4">
                    <img
                        className="rounded-xl border-2 border-gray-600 shadow-2xl w-[616px] aspect-[616/413] object-cover"
                        src="public/images/hero-img-1.jpg"
                    ></img>
                </div>
                {/* Stats */}
                <div className="flex flex-col items-center justify-center gap-5 text-left text-white-800 lg:items-start lg:col-span-2 lg:row-span-1">
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="text-green-400 font-bold">39%</h3>
                        <p>more likely to get hired</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <h3 className="text-green-400 font-bold">8%</h3>
                        <p>better pay with your next job</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
