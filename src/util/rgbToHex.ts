export const rgbToHex = (rgb: string): string => {
    const rgbValues = rgb.match(/(\d+)/g);
    if (!rgbValues) return "";

    const hexValues = rgbValues.slice(0, 3).map((value) => {
        const hex = parseInt(value).toString(16).padStart(2, "0");
        return hex;
    });

    return `#${hexValues.join("")}`;
};
