export const updateMinHeightOnDrop = () => {
    // Get the parent container of all rows\
    const cvMain = document.getElementById("cv-main");

    if (!cvMain) return;

    const rows = Array.from(cvMain.children) as HTMLElement[];

    rows.forEach((row) => {
        const columns = Array.from(row.children) as HTMLElement[];

        const anyColumnHasChildren = columns.some(
            (col) => col.children.length > 0
        );

        columns.forEach((col) => {
            if (anyColumnHasChildren || col.children.length > 0) {
                col.style.minHeight = "30px";
            } else {
                col.style.minHeight = "100px";
            }
        });

        if (!anyColumnHasChildren) {
            columns.forEach((col) => {
                col.style.minHeight = "100px";
            });
        }
    });
};
