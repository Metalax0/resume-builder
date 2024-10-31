import { HeadingPrimary } from "./primary";
import { HeadingSecondary } from "./secondary";
import { HeadingTertiary } from "./tertiary";

interface HeadingPropsType {
    type: 1 | 2 | 3;
    drag: (e: React.DragEvent<HTMLElement>) => void;
}

export const Heading = ({ type, drag }: HeadingPropsType) => {
    const renderHeading = () => {
        switch (type) {
            case 1:
                return <HeadingPrimary drag={drag} />;

            case 2:
                return <HeadingSecondary drag={drag} />;

            case 3:
                return <HeadingTertiary drag={drag} />;

            default:
                <h3 className="text-red-500"> Invalid Heading Type </h3>;
        }
    };

    return renderHeading();
};
