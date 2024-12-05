import { useEffect, useMemo } from "react";
import { ImgExclusivePropsType } from "../img-exclusive";
import { PropertiesStateCategoryEnum } from "../../../../../types/properties";
import { Slider } from "../../../../atoms/slider";

export const ImgExclusive2 = ({
    selected,
    stateData,
    dispatch,
}: ImgExclusivePropsType) => {
    const selectedImg = selected as HTMLImageElement;

    const { newImgRounded } = useMemo(() => {
        return {
            newImgRounded: selectedImg
                ? parseFloat(getComputedStyle(selectedImg).borderRadius)
                : 0,
        };
    }, [selected]);

    useEffect(() => {
        dispatchImageRounded(newImgRounded);
    }, [newImgRounded]);

    const dispatchImageRounded = (value: number) => {
        dispatch({
            category: PropertiesStateCategoryEnum.element,
            value: { imgRounded: value },
        });
        selected!.style.borderRadius = value + "px";
    };

    const handleImageRoundedChange = (rounded: number) => {
        dispatchImageRounded(rounded);
    };

    return (
        <Slider
            min={0}
            max={300}
            title="Rounded (%)"
            value={stateData.imgRounded}
            handleChange={handleImageRoundedChange}
        />
    );
};
