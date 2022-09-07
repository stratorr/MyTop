import { ReactNode } from "react";

export interface HeadlineProps {
    tag: "h1" | "h2" | "h3";
    children: ReactNode;
}
