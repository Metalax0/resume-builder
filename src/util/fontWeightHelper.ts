import { FontWeightEnum } from "../types/properties";

export const fontWeightHelper = (fontWeight: FontWeightEnum | string) => {
    if (Object.values(FontWeightEnum).includes(fontWeight as FontWeightEnum)) {
        if (fontWeight === FontWeightEnum.normal) return "400";
        if (fontWeight === FontWeightEnum.semibold) return "600";
        if (fontWeight === FontWeightEnum.bold) return "700";
        if (fontWeight === FontWeightEnum.bolder) return "800";
        else return "400";
    } else {
        const fontWeightNum = Number(fontWeight);
        if (fontWeightNum <= 400) return FontWeightEnum.normal;
        if (fontWeightNum > 400 && fontWeightNum <= 600)
            return FontWeightEnum.semibold;
        if (fontWeightNum > 600 && fontWeightNum <= 800)
            return FontWeightEnum.bold;
        return FontWeightEnum.bolder;
    }
};
