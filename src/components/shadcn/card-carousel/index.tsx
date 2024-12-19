import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/shadcn/ui/carousel";

// Updated CardCarousel component
export interface CardCarouselPropsType {
    cards: React.ReactNode[]; // Accepting React Node array for cards
}

export const CardCarousel = ({ cards }: CardCarouselPropsType) => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {cards.map((card, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-1/1 sm:basis-1/3 md:basis-1/2 xl:basis-1/3"
                    >
                        {card}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
