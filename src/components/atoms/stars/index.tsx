import React from "react";

export interface StarsPropsType {
    total: number;
    filled: number;
    size: "sm" | "md" | "lg";
    align?: "left" | "center" | "right";
}

export const Stars: React.FC<StarsPropsType> = ({
    total,
    filled,
    size,
    align = "left",
}) => {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
    };

    const alignClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
    };

    const starSizeClass = sizeClasses[size];
    const alignStarsClass = alignClasses[align];

    return (
        <div className={`flex items-center ${alignStarsClass}`}>
            {Array.from({ length: total }, (_, index) => (
                <svg
                    key={index}
                    className={`${starSizeClass} ${
                        index < filled ? "text-green-400" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            ))}
        </div>
    );
};
