import { ReactNode, useState, useEffect } from "react";

interface AnimatedLoadingBarProps {
    duration?: number;
    children: ReactNode;
}

export const AnimatedLoadingBar = ({
    duration = 2000,
    children,
}: AnimatedLoadingBarProps) => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    return 100;
                }
                return Math.min(prevProgress + 100 / (duration / 50), 100);
            });
        }, 50);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div className="relative h-screen w-full">
            {loading && (
                <div
                    className="absolute inset-0 flex justify-center items-center z-50"
                    style={{
                        backgroundColor: "rgba(17, 24, 39, 0.9)",
                    }}
                >
                    <div className="w-3/4 max-w-md bg-gray-300 dark:bg-gray-700 h-3 rounded-full">
                        <div
                            className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                            style={{
                                width: `${progress}%`,
                                transition: "width 0.1s",
                            }}
                        />
                    </div>
                </div>
            )}

            <div
                className={`relative z-10 transition-opacity duration-500 ${
                    loading ? "opacity-70" : "opacity-100"
                }`}
            >
                {children}
            </div>
        </div>
    );
};
