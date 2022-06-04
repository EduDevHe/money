import styles from "./styles.module.css";
import { MobileNavigation, DesktopNavigation } from "../Navigation";

function NavBar() {
	return (
		<header className={styles.header}>
			<MobileNavigation />
			<DesktopNavigation />
		</header>
	);
}

export { NavBar };
