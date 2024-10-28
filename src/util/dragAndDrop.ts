export const isTargetValidDropZone = (target: EventTarget & HTMLDivElement) => {
    if (
        target.classList.contains("section-col") ||
        target.classList.contains("section-elements-collection")
    )
        return true;
    else return false;
};

export const isTargetOccupied = (target: EventTarget & HTMLDivElement) => {
    const elem = target.childNodes[0] as HTMLElement;
    if (elem) {
        const draggable = elem.getAttribute("draggable");
        return draggable ? true : false;
    } else return false;
};
