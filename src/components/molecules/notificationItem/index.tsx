import {
    NotificationCategoryType,
    NotificationPropsType,
} from "../../../types/notifications";

export const NotificationItem = ({
    category,
    message,
}: NotificationPropsType) => {
    const categoryStyles: Record<NotificationCategoryType, string> = {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        warning: "bg-yellow-500 text-black",
    };

    return (
        <div
            className={`rounded-lg px-7 py-5 shadow-2xl transition-opacity duration-1000 ease-in-out animate-slideInRight ${categoryStyles[category]}`}
        >
            {message}
        </div>
    );
};
