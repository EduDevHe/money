import { ReactElement } from "react";
import { NavBar } from "../../components/NavBar";
import styles from "./styles.module.css";

type Props = {
	children: ReactElement;
};

function MainLayout({ children }: Props) {
	return (
		<div className={styles.container}>
			<NavBar />
			<div className={styles.content}>{children}</div>
		</div>
	);
}

export { MainLayout };
