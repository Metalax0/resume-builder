export const getSelectedTextContainer = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return null;

    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;

    // Check if the common ancestor is inside the div with id="cv-main"
    const cvMainDiv = document.getElementById("cv-main");
    if (!cvMainDiv || !cvMainDiv.contains(commonAncestor)) {
        return null;
    }

    // Check if the selection is already inside a span (return if already inside a span)
    let parentElement: HTMLElement | null =
        commonAncestor instanceof HTMLElement
            ? commonAncestor
            : commonAncestor.parentElement;

    while (parentElement) {
        if (parentElement.tagName === "SPAN") {
            // If it's already inside a span, return that span without wrapping again
            return parentElement;
        }
        parentElement = parentElement.parentElement;
    }

    // If not inside a span, we need to wrap the clicked word in a span
    const wordRegex = /\b(\w+)\b/g;
    const textNode = range.startContainer;
    const offset = range.startOffset;

    // Ensure that the text node is valid and contains non-empty content
    if (textNode.nodeType !== Node.TEXT_NODE || textNode.textContent === "") {
        return null;
    }

    const text = textNode.textContent || "";

    let wordStart = offset;
    let wordEnd = offset;

    // Find the word boundaries
    let match;
    while ((match = wordRegex.exec(text)) !== null) {
        const matchStart = match.index;
        const matchEnd = match.index + match[0].length;

        if (matchStart <= offset && matchEnd >= offset) {
            wordStart = matchStart;
            wordEnd = matchEnd;
            break;
        }
    }

    // Create a new range to select the word
    try {
        range.setStart(textNode, wordStart);
        range.setEnd(textNode, wordEnd);
    } catch (error) {
        console.error("Error setting range:", error);
        return null;
    }

    // Check if the selected text is valid (non-empty and meaningful)
    const selectedText = range.toString().trim();
    if (selectedText.length === 0) {
        return null;
    }

    // Check if the selection is already inside an existing span
    const selectedNode = range.startContainer;

    let parentSpan: HTMLElement | null = selectedNode as HTMLElement;

    while (parentSpan && parentSpan.nodeType !== Node.ELEMENT_NODE) {
        parentSpan = parentSpan.parentElement;
    }

    // If selection is already inside a span, return that span
    if (parentSpan && parentSpan.tagName === "SPAN") {
        return parentSpan;
    }

    // Create the new span to wrap the word
    const newSpan = document.createElement("span");
    newSpan.style.border = "2px solid red"; // Or any style you want to apply

    try {
        // Surround the selected word with a span only if it's not inside an existing span
        if (selectedText.trim()) {
            range.surroundContents(newSpan);
        }
    } catch {
        // If surrounding fails, reset the selection and return null
        selection.removeAllRanges();
        return null;
    }

    // Check if the span has no content or only contains whitespace, don't return it
    if (!newSpan.textContent?.trim()) {
        return null;
    }

    // Reset the selection to the newly created SPAN
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(newSpan);
    selection.addRange(newRange);

    return newSpan;
};
