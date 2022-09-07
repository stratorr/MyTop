import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";

export const Header = ({ ...props }: HeaderProps) => {
    return <div {...props}>Header</div>;
};
