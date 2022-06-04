import { ReactElement } from "react";
import styles from "./styles.module.css";

type Props = {
	children: ReactElement | string;
};

function NavItem({ children }: Props) {
	return <li className={styles.item}> {children} </li>;
}

export { NavItem };
