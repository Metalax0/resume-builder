import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { Blocks } from "../../../draggable/blocks";
import { Heading } from "../../../draggable/heading";
import { Img } from "../../../draggable/img";
import { Link } from "../../../draggable/link";
import { List } from "../../../draggable/list";
import { Paragraph } from "../../../draggable/paragraph";

export const PickerTab = () => {
    const { drop } = useRowsAndColumns();

    return (
        <div
            className="section-elements-collection flex-1 flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={drop}
        >
            <strong className="text-black text-left">
                Drag & drop to place items
            </strong>

            <Paragraph />
            <Link />
            <List />
            <Img />
            <Blocks drop={drop} orientation="horizontal" />
            <Blocks drop={drop} orientation="vertical" />
            <Heading type={1} />
            <Heading type={2} />
            <Heading type={3} />
        </div>
    );
};
