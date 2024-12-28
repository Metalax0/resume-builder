import { useTheme } from "@/components/context/themeContext";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/shadcn/ui/menubar";
import { Monitor, Moon, Sun } from "lucide-react";

export const MenuBar = () => {
    const { theme } = useTheme();

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        New <MenubarShortcut>Ctrl + N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Open <MenubarShortcut>Ctrl + O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Export PDF <MenubarShortcut>Ctrl + E</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        Undo <MenubarShortcut>Ctrl + Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Redo <MenubarShortcut>Ctrl + Y</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Cut <MenubarShortcut>Ctrl + X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Copy <MenubarShortcut>Ctrl + C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Paste <MenubarShortcut>Ctrl + V</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                    <MenubarCheckboxItem>Enable Wireframe</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                        Show Selections
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                        Show Sidebars
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Zoom In <MenubarShortcut>Ctrl + +</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Zoom Out <MenubarShortcut>Ctrl + -</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                        Reset Zoom <MenubarShortcut>Ctrl + 0</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        Toggle Fullscreen <MenubarShortcut>F11</MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>
                    {theme === "dark" ? (
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    ) : theme === "light" ? (
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <Monitor className="h-[1.2rem] w-[1.2rem]" />
                    )}
                </MenubarTrigger>
                <MenubarContent>
                    <ThemeToggle />
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};
