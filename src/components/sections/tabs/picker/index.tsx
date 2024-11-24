import { useRowsAndColumns } from "../../../../hooks/useRowsAndColumns";
import { Accordion } from "../../../atoms/accordian";
import { useAccordion } from "../../../context/accordianContext";
import { Blocks } from "../../../draggable/blocks";
import { Heading } from "../../../draggable/heading";
import { Img } from "../../../draggable/img";
import { Link } from "../../../draggable/link";
import { List } from "../../../draggable/list";
import { Paragraph } from "../../../draggable/paragraph";

export const PickerTab = () => {
    const { drop } = useRowsAndColumns();
    const { accordionStates, setAccordionState } = useAccordion();

    const handleAccordionToggle = (title: string) => {
        setAccordionState(title, !accordionStates[title]);
    };

    return (
        <div
            className="section-elements-collection flex-1 flex flex-col gap-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={drop}
        >
            <strong className="text-black text-left">
                Drag & drop to place items
            </strong>

            <Accordion
                title={"Basic"}
                isOpen={accordionStates["picker/basic"]}
                onToggle={() => handleAccordionToggle("picker/basic")}
            >
                <Paragraph />
                <Link />
                <List />
            </Accordion>

            <Accordion
                title={"Media"}
                isOpen={accordionStates["picker/media"]}
                onToggle={() => handleAccordionToggle("picker/media")}
            >
                <Img />
            </Accordion>

            <Accordion
                title={"Blocks"}
                isOpen={accordionStates["picker/blocks"]}
                onToggle={() => handleAccordionToggle("picker/blocks")}
            >
                <Blocks drop={drop} orientation="horizontal" />
                <Blocks drop={drop} orientation="vertical" />
            </Accordion>

            <Accordion
                title={"Heading"}
                isOpen={accordionStates["picker/heading"]}
                onToggle={() => handleAccordionToggle("picker/heading")}
            >
                <Heading type={1} />
                <Heading type={2} />
                <Heading type={3} />
            </Accordion>
        </div>
    );
};
