import { HeadingPrimary } from "./primary";
import { HeadingSecondary } from "./secondary";
import { HeadingTertiary } from "./tertiary";

interface HeadingPropsType {
    type: 1 | 2 | 3;
}

export const Heading = ({ type }: HeadingPropsType) => {
    const renderHeading = () => {
        switch (type) {
            case 1:
                return <HeadingPrimary />;

            case 2:
                return <HeadingSecondary />;

            case 3:
                return <HeadingTertiary />;

            default:
                <h3 className="text-red-500"> Invalid Heading Type </h3>;
        }
    };

    return renderHeading();
};
