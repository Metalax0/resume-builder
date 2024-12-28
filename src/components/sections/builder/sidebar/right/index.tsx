import { Heading } from "@/components/draggable/heading";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/shadcn/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/shadcn/ui/sidebar";
import { ChevronDown } from "lucide-react";

const BasicElements = [
    {
        label: "heading 1",
        element: <Heading type={1} key={"draggable-heading-1"} />,
    },
    {
        label: "heading 2",
        element: <Heading type={2} key={"draggable-heading-2"} />,
    },
    {
        label: "heading 3",
        element: <Heading type={3} key={"draggable-heading-3"} />,
    },
];

export const BuilderSidebarRight = () => {
    return (
        <Sidebar side="right" variant="floating" collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex justify-center">
                        Elements
                    </SidebarGroupLabel>

                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarGroup>
                            <SidebarGroupLabel asChild>
                                <CollapsibleTrigger>
                                    Headings
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {BasicElements.map(
                                            (item) => item.element
                                        )}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};
