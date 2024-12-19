import { Navbar } from "@/components/molecules/navbar";
import { BehindTheCode } from "@/components/sections/behind-the-code";
import { Builder } from "@/components/sections/builder";
import { Landing } from "@/components/sections/landing";
import { BrowserRouter, Route, Routes } from "react-router";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            {children}
        </div>
    );
};

export const Routing = () => {
    return (
        <BrowserRouter>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="builder" element={<Builder />} />
                    <Route path="behindthecode" element={<BehindTheCode />} />
                </Routes>
            </PageLayout>
        </BrowserRouter>
    );
};

<Landing />;
