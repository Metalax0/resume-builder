import { Card, CardContent } from "@/components/shadcn/ui/card";
import {
    User,
    DollarSign,
    Layout,
    Save,
    FileText,
    Code,
    Shield,
    Layers,
    Globe,
} from "lucide-react";

export const Features = () => {
    const featureList = [
        {
            title: "No Login, No Hassle",
            content:
                "Start building your resume instantly. No signups, no logins – just pure simplicity.",
            icon: <User size={30} color="#4ade80" />,
        },
        {
            title: "Completely Free to Use",
            content:
                "Create professional resumes without spending a dime. No hidden costs, ever!",
            icon: <DollarSign size={30} color="#4ade80" />,
        },
        {
            title: "Drag and Drop Simplicity",
            content:
                "Customize your resume effortlessly with an intuitive drag-and-drop editor.",
            icon: <Layout size={30} color="#4ade80" />,
        },
        {
            title: "Save Your Progress",
            content:
                "Take breaks without worries. Save your progress and return anytime.",
            icon: <Save size={30} color="#4ade80" />,
        },
        {
            title: "Export as PDF",
            content:
                "Download your resume instantly in high-quality PDF format, ready to send.",
            icon: <FileText size={30} color="#4ade80" />,
        },
        {
            title: "Open Source & Transparent",
            content:
                "Built on open-source principles – explore and trust our code.",
            icon: <Code size={30} color="#4ade80" />,
        },
        {
            title: "Personal Data Privacy",
            content:
                "Your data, your control. We don’t store or track any personal information.",
            icon: <Shield size={30} color="#4ade80" />,
        },
        {
            title: "Choose or Create Templates",
            content:
                "Use professionally-designed templates or unleash your creativity and start from scratch.",
            icon: <Layers size={30} color="#4ade80" />,
        },
        {
            title: "No Software Needed",
            content:
                "Access everything directly from your browser – no installations required.",
            icon: <Globe size={30} color="#4ade80" />,
        },
    ];

    return (
        <div className="flex flex-col gap-10 px-5 md:px-14 lg:px-20 py-10 bg-slate-800">
            <h2>
                Why <span className="text-green-400">Choose</span> Us ?
            </h2>
            <div className="grid gap-x-5 gap-y-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {featureList.map((feature, index) => (
                    <Card key={index} className="w-full">
                        <CardContent className="flex w-full h-full text-start gap-5 items-center justify-start p-">
                            <span>{feature.icon}</span>
                            <div className="flex flex-col gap-1">
                                <h4>{feature.title}</h4>
                                <p>{feature.content}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
