import { MousePointer2, TextCursor } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
} from "@/components/shadcn/ui/sidebar";

export const BuilderSidebarLeft = () => {
    const activeTool = "text";

    const handleToolSelect = (selected: "select" | "text") => {
        switch (selected) {
            case "select":
                //
                break;

            case "text":
                //
                break;

            default:
                console.error("Invalid tool selected (sections/builder/left");
                break;
        }
    };

    const items = [
        {
            label: "select",
            element: (
                <MousePointer2 onClick={() => handleToolSelect("select")} />
            ),
        },
        {
            label: "text",
            element: <TextCursor onClick={() => handleToolSelect("text")} />,
        },
    ];

    return (
        <Sidebar side="left" variant="floating" collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex justify-center">
                        Tools
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item, index) => (
                                <SidebarMenuButton
                                    className="hover:cursor-pointer"
                                    isActive={item.label === activeTool}
                                    asChild
                                    key={index}
                                >
                                    {item.element}
                                </SidebarMenuButton>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};
