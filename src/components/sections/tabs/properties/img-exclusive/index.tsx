import { useEffect, useMemo } from "react";
import {
    PropertiesActionType,
    PropertiesStateCategoryEnum,
    PropertiesStateElementType,
} from "../../../../../types/properties";

export interface ImgExclusivePropsType {
    selected: HTMLElement | null;
    stateData: PropertiesStateElementType;
    dispatch: React.Dispatch<PropertiesActionType>;
}

export const ImgExclusive = ({
    selected,
    stateData,
    dispatch,
}: ImgExclusivePropsType) => {
    const selectedImg = selected as HTMLImageElement;

    const { newImgData } = useMemo(() => {
        return {
            newImgData: selectedImg ? selectedImg.src : "www.google.com",
        };
    }, [selected]);

    useEffect(() => {
        dispatchImgData(newImgData);
    }, [newImgData, selected]);

    const dispatchImgData = (value: string) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { imgData: value },
        });
    };

    const handleImgDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const src = reader.result as string;
                if (selected) {
                    selected.setAttribute("src", src);
                }
                dispatchImgData(src);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div
            className="flex items-center justify-center w-full"
            style={{
                backgroundImage: `url(${stateData.imgData || ""})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-gray-600 hover:border-gray-500 hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center p-2 bg-gray-600 rounded-lg">
                    <svg
                        className="w-8 h-8 mb-4 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p className="mb-2 text-sm text-center text-gray-400 bg-gray-600">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop images
                    </p>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleImgDataChange}
                />
            </label>
        </div>
    );
};
