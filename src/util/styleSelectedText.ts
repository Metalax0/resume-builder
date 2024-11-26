export const styleSelectedText = (color: string) => {
    const selection = window.getSelection();

    if (!selection || selection.rangeCount === 0) {
        console.warn("No text is selected.");
        return;
    }

    const range = selection.getRangeAt(0);

    // Check if the selected range is already inside a styled element
    const parentElement = range.commonAncestorContainer.parentElement;

    if (
        parentElement &&
        parentElement.tagName === "SPAN" &&
        parentElement.style.color
    ) {
        // Update the color of the existing span
        parentElement.style.color = color;
    } else {
        // Otherwise, wrap the selected text with a new span
        const span = document.createElement("span");
        span.style.color = color;

        try {
            range.surroundContents(span);
        } catch (error) {
            console.error("Cannot apply styles to the selection: ", error);
        }
    }
};
