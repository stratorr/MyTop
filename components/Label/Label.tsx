import React from "react";
import { LabelProps } from "./Label.props";
import cn from "classnames";
import styles from "./Label.module.css";

export const Label = ({
    children,
    size = "small",
    color = "ghost",
    className,
    href,
    ...props
}: LabelProps) => {
    return (
        <div
            className={cn(styles.tag, {
                [styles.small]: size === "small",
                [styles.medium]: size === "medium",
                [styles.ghost]: color === "ghost",
                [styles.gray]: color === "gray",
                [styles.green]: color === "green",
                [styles.primary]: color === "primary",
                [styles.red]: color === "red",
            })}
            {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};
