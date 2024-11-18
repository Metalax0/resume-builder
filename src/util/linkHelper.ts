export const getURL = (selected: HTMLElement | null) => {
    let finalURL = "www.google.com";
    if (selected)
        finalURL = selected.getAttribute("data-link") || "www.google.com";
    return finalURL;
};

export const adjustURL = (url: string) => {
    if (!/^https?:\/\//i.test(url)) {
        return `https://${url}`;
    } else return url;
};
