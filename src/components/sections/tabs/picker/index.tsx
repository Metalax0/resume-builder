import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { List } from "../../../draggable/list";
import { Paragraph } from "../../../draggable/paragraph";

export const PickerTab = () => {
    const { drag, drop } = useRowsAndColumns();

    return (
        <div
            className="section-elements-collection flex-1 flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={drop}
        >
            <strong className="text-black">Drag & drop to place items</strong>

            <Paragraph key={1} drag={drag} />
            <List key={2} drag={drag} />
        </div>
    );
};
