export const serializeDOM = (node: HTMLElement): any => {
    return {
        tag: node.tagName,
        attributes: Array.from(node.attributes).reduce((attrs, attr) => {
            attrs[attr.name] = attr.value;
            return attrs;
        }, {} as Record<string, string>),
        children: Array.from(node.childNodes).map((child) =>
            child.nodeType === Node.ELEMENT_NODE
                ? serializeDOM(child as HTMLElement)
                : child.nodeType === Node.TEXT_NODE
                ? { text: child.textContent }
                : null
        ),
    };
};

export const recreateDOM = (json: any): HTMLElement | null => {
    if (json.text) {
        return document.createTextNode(json.text) as any;
    }

    const element = document.createElement(json.tag);

    // Set attributes
    for (const [name, value] of Object.entries(json.attributes || {})) {
        element.setAttribute(name, value as string);
    }

    // Append children
    (json.children || []).forEach((child: any) => {
        const childNode = recreateDOM(child);
        if (childNode) {
            element.appendChild(childNode);
        }
    });

    return element;
};
