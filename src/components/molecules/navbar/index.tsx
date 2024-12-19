import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export function Navbar() {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const handleBttnClick = () => {
        navigate("/");
    };

    return (
        <nav className="bg-slate-800">
            <div className="p-3 flex justify-between items-center">
                <div className="flex scale-150 items-center">
                    <img
                        src="images/resucraft.png"
                        alt="Metalax.ResuCraft logo"
                        className="h-8 mx-10 hover:cursor-pointer"
                        onClick={handleBttnClick}
                    />
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigation Large Screen */}
                {!isOpen && (
                    <div
                        className={`${
                            isOpen ? "block" : "hidden"
                        } md:flex space-x-6 rtl:space-x-reverse`}
                    >
                        {[
                            { to: "/", label: "Home" },
                            { to: "/builder", label: "Builder" },
                            { to: "/behindthecode", label: "Behind The Code" },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end
                                className={({ isActive, isPending }) =>
                                    [
                                        "py-2 px-4 rounded transition-colors duration-200",
                                        isPending ? "text-gray-400" : "",
                                        isActive
                                            ? "text-[#242424] bg-green-500"
                                            : "text-gray-300 hover:text-green-500 hover:bg-gray-700",
                                    ].join(" ")
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                )}

                {/* Mobile view */}
                {isOpen && (
                    <div className="absolute top-14 right-0 z-10 bg-[#242424] text-white p-4 space-y-4 flex flex-col">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/builder", label: "Builder" },
                            { to: "/behindthecode", label: "Behind The Code" },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end
                                className={({ isActive, isPending }) =>
                                    [
                                        "py-1 px-4 rounded transition-colors duration-200",
                                        isPending ? "text-gray-400" : "",
                                        isActive
                                            ? "text-[#242424] bg-green-500"
                                            : "text-gray-300 hover:text-green-500 hover:bg-gray-700",
                                    ].join(" ")
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
