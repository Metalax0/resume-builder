export const HiredAt = () => {
    return (
        <div className="flex flex-col gap-2 bg-gray-800 py-10 px-10">
            <p className="text-gray-100 font-semibold text-xl">
                Our customers have been hired at
            </p>
            <div className="flex justify-center items-center flex-wrap">
                <img
                    className="rounded-xl w-[200px] aspect-[250/100]  drop-shadow-2xl"
                    src="/images/logo-1.png"
                ></img>

                <img
                    className="rounded-xl w-[250px] aspect-[250/100] drop-shadow-2xl"
                    src="/images/logo-2.png"
                ></img>

                <img
                    className="rounded-xl w-[250px] aspect-[250/100] object-contain drop-shadow-2xl"
                    src="/images/logo-4.png"
                ></img>

                <img
                    className="rounded-xl w-[250px] aspect-[250/100] object-contain drop-shadow-2xl"
                    src="/images/logo-5.png"
                ></img>

                <img
                    className="rounded-xl w-[250px] aspect-[250/100] object-contain drop-shadow-2xl"
                    src="/images/logo-3.png"
                ></img>
            </div>
        </div>
    );
};
