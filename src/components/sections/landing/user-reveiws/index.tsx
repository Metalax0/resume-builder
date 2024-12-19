import { Stars } from "@/components/atoms/stars";
import { CardCarousel } from "@/components/shadcn/card-carousel";
import { Card, CardContent } from "@/components/shadcn/ui/card";

export const UserReviews = () => {
    const reviewData = [
        {
            rating: 5,
            title: "Perfect Tool for Quick Resumes!",
            content:
                "The drag-and-drop feature made creating my resume fast and easy. The templates are sleek and professional.",
            name: "John Doe",
        },
        {
            rating: 4,
            title: "User-Friendly and Intuitive",
            content:
                "I created my resume in minutes without any design skills. It's simple to use and highly effective!",
            name: "Jane Smith",
        },
        {
            rating: 5,
            title: "Professional Templates at Your Fingertips",
            content:
                "The variety of templates allowed me to find one that suited my industry perfectly. I’m impressed!",
            name: "Robert Brown",
        },
        {
            rating: 5,
            title: "Customizable and Time-Saving",
            content:
                "The drag-and-drop functionality let me tailor my resume exactly how I wanted. It’s a huge time-saver.",
            name: "Emily Davis",
        },
        {
            rating: 5,
            title: "Impressive Results Every Time",
            content:
                "Whether using a template or starting fresh, the results are always polished and professional.",
            name: "Michael Wilson",
        },
    ];

    // Generating an array of Card components
    const reviewCards = reviewData.map((item, index) => (
        <Card key={index}>
            <CardContent className="flex flex-col h-full text-start gap-0 items-start justify-between px-5">
                <div className="flex flex-col flex-grow gap-1 w-full">
                    <Stars total={5} filled={item.rating} size={"sm"} />
                    <p className="mt-2 text-sm font-thin">{item.name}</p>
                    <h5 className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.title}
                    </h5>
                    <p className="font-thin">{item.content}</p>
                </div>
            </CardContent>
        </Card>
    ));

    return (
        <div className="flex flex-col items-center gap-10 w-full h-auto py-20 px-20 lg:px-32 bg-[#242424]">
            <h2 className="max-w-2xl">
                Reviewd by the community.{" "}
                <span className="text-green-400">Trusted</span> by professionals
            </h2>
            <div className="w-full flex gap-10 flex-col md:flex-row md:gap-16">
                <div className="flex flex-col justify-center md:items-start gap-5 md:flex-[1] p-2 rounded-xl">
                    <div className="flex flex-col">
                        <h4>4 out of 5</h4>
                        <Stars
                            total={5}
                            filled={4}
                            size={"lg"}
                            align="center"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="flex gap-1">
                            <Stars total={1} filled={1} size={"sm"} />
                            <span> Trust me bro </span>
                        </p>
                        <p className="font-light">based on 40,000 reviews</p>
                    </div>
                </div>
                <div className="md:flex-[4] md:w-0.5">
                    <CardCarousel cards={reviewCards} />
                </div>
            </div>
        </div>
    );
};
