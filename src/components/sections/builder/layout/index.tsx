import {
    SidebarProvider,
    SidebarTrigger,
} from "@/components/shadcn/ui/sidebar";

import { BuilderSidebarLeft } from "../sidebar/left";
import { BuilderSidebarRight } from "../sidebar/right";

export default function BuilderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-1 h-full">
            <SidebarProvider>
                <BuilderSidebarLeft />
                <SidebarTrigger side="left" />
                <main className="flex-1">{children}</main>
                <SidebarTrigger side="right" />
                <BuilderSidebarRight />
            </SidebarProvider>
        </div>
    );
}
