import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./Arrow.svg";

export const Button = ({
    children,
    appearance,
    className,
    arrow = "none",
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost",
            })}
            {...props}>
            {children}
            {arrow !== "none" ? (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === "down",
                    })}>
                    <ArrowIcon />
                </span>
            ) : null}
        </button>
    );
};
