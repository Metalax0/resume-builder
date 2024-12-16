import { ReactNode } from "react";

export type NotificationCategoryType = "success" | "error" | "info" | "warning";

export interface NotificationPropsType {
    id: string;
    category: NotificationCategoryType;
    message: string;
}

export interface NotificationContextType {
    addNotification: (type: NotificationCategoryType, message: string) => void;
}

export interface NotificationProviderPropsType {
    children: ReactNode;
}
