import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { Accordion } from "../../../atoms/accordian";
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

            <Accordion title={"Basic"}>
                <Paragraph />
                <Link />
                <List />
            </Accordion>

            <Accordion title={"Media"}>
                <Img />
            </Accordion>

            <Accordion title={"Blocks"}>
                <Blocks drop={drop} orientation="horizontal" />
                <Blocks drop={drop} orientation="vertical" />
            </Accordion>

            <Accordion title={"Heading"}>
                <Heading type={1} />
                <Heading type={2} />
                <Heading type={3} />
            </Accordion>
        </div>
    );
};
