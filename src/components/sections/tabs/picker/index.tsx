import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { Paragraph } from "../../../draggable/paragraph";

export const PickerTab = () => {
    const { drag, drop } = useRowsAndColumns();

    return (
        <div
            className="section-elements-collection flex-1 flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => drop(e)}
        >
            <strong className="text-black">Drag & drop to place items</strong>

            <Paragraph text={"About Me"} drag={drag} />
            <Paragraph text={"Education"} drag={drag} />
            <Paragraph text={"Experience"} drag={drag} />
        </div>
    );
};
