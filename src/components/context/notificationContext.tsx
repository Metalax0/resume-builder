import { createContext, useContext, useState } from "react";
import { NotificationItem } from "../molecules/notification-item";
import {
    NotificationCategoryType,
    NotificationContextType,
    NotificationPropsType,
    NotificationProviderPropsType,
} from "../../types/notifications";

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider = ({
    children,
}: NotificationProviderPropsType) => {
    const [notifications, setNotifications] = useState<NotificationPropsType[]>(
        []
    );

    const addNotification = (
        category: NotificationCategoryType,
        message: string
    ) => {
        const id = Math.random().toString(36).substring(2);
        setNotifications((prev) => [...prev, { id, category, message }]);

        // Auto-remove notification after 3 seconds
        setTimeout(() => {
            setNotifications((prev) => prev.filter((notif) => notif.id !== id));
        }, 3000);
    };

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="fixed top-4 right-4 z-50 space-y-2">
                {notifications.map((notif) => (
                    <NotificationItem
                        category={notif.category}
                        message={notif.message}
                        key={notif.id}
                        id={notif.id}
                    />
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error(
            "useNotification must be used within a NotificationProvider"
        );
    }
    return context;
};
