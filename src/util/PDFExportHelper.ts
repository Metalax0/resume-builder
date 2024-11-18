/*

# Tasks required before exporting as pdf
- Add href to anchor tags (data-link)
-

# Tasks required after exporting as pdf
- Remove href from anchor tags (to remove redirect during development)
-

*/

export const handleTasksBeforeExport = () => {
    const linkElement = document.querySelectorAll('[data-category="link"]');
    if (linkElement.length != 0) {
        linkElement.forEach((node) => {
            const url =
                node.getAttribute("data-link") || "https://www.google.com/";
            node.setAttribute("href", url);
        });
    }
};

export const handleTasksAfterExport = () => {
    const linkElement = document.querySelectorAll('[data-category="link"]');
    if (linkElement.length != 0) {
        linkElement.forEach((node) => {
            node.removeAttribute("href");
        });
    }
};
