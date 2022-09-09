import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./Menu.module.css";

export const Menu = () => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const menuUI = menu.map((item) => {
        return <li key={item._id.secondCategory}>{item._id.secondCategory}</li>;
    });

    return <div>{menuUI}</div>;
};
