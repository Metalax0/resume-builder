export const getURL = (selected: HTMLElement | null) => {
    let finalURL = "#";

    if (selected) {
        const url = selected.getAttribute("href") || "www.google.com";
        if (!/^https?:\/\//i.test(url)) {
            finalURL = `https://${url}`;
        }
    }
    return adjustURL(finalURL);
};

export const adjustURL = (url: string) => {
    if (!/^https?:\/\//i.test(url)) {
        return `https://${url}`;
    } else return url;
};
