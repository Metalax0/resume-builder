import { Features } from "./features";
import { Hero } from "./hero";
import { HiredAt } from "./hired-at";
import { UserReviews } from "./user-reveiws";

export const Landing = () => {
    return (
        <>
            <Hero />
            <HiredAt />
            <UserReviews />
            <Features />
        </>
    );
};
