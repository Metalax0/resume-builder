import {
    SidebarProvider,
    SidebarTrigger,
} from "@/components/shadcn/ui/sidebar";
import { LeftSidebar } from "../sidebar";

export default function BuilderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <LeftSidebar />
            <SidebarTrigger />
            <main className="flex-1">{children}</main>
        </SidebarProvider>
    );
}
