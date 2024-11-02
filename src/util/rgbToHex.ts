export const rgbToHex = (rgb: string) => {
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return "";

    const hexValues = rgbValues.map((value) => {
        const hex = parseInt(value).toString(16).padStart(2, "0");
        return hex;
    });

    return `#${hexValues.join("")}`;
};
