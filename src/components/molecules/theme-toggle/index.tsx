import { Monitor, Moon, Sun } from "lucide-react";
import { MenubarItem } from "@/components/shadcn/ui/menubar";
import { useTheme } from "@/components/context/themeContext";

export const ThemeToggle = () => {
    const { setTheme } = useTheme();

    return (
        <>
            <MenubarItem onClick={() => setTheme("light")}>
                <div className="flex items-center">
                    <Sun className="h-[1.2rem] w-[1.2rem] mr-2" />
                    Light
                </div>
            </MenubarItem>
            <MenubarItem onClick={() => setTheme("dark")}>
                <div className="flex items-center">
                    <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />
                    Dark
                </div>
            </MenubarItem>
            <MenubarItem onClick={() => setTheme("system")}>
                <div className="flex items-center">
                    <Monitor className="h-[1.2rem] w-[1.2rem] mr-2" />
                    System
                </div>
            </MenubarItem>
        </>
    );
};
