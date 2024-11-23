export const hasGrandchildren = (element: HTMLElement) => {
    if (element.children.length === 0) {
        return false;
    }
    for (const child of element.children) {
        if (child.children.length > 0) {
            return true;
        }
    }
    return false;
};
