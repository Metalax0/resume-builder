import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { Blocks } from "../../../draggable/blocks";
import { Heading } from "../../../draggable/heading";
import { Img } from "../../../draggable/img";
import { Link } from "../../../draggable/link";
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
            <strong className="text-black text-left">
                Drag & drop to place items
            </strong>

            <Paragraph drag={drag} />
            <Link drag={drag} />
            <List drag={drag} />
            <Img drag={drag} />
            <Blocks drag={drag} drop={drop} orientation="horizontal" />
            <Blocks drag={drag} drop={drop} orientation="vertical" />
            <Heading type={1} drag={drag} />
            <Heading type={2} drag={drag} />
            <Heading type={3} drag={drag} />
        </div>
    );
};
