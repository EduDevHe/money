import { ButtonHTMLAttributes } from "react";
import { FiBookOpen, FiBook } from "react-icons/fi";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	open: boolean;
}

function MenuButton({ open, ...rest }: Props) {
	const Open = () => <FiBookOpen size="2.5rem" />;

	const Closed = () => <FiBook size="2.5rem" />;

	return (
		<button {...rest} className={styles.menuButton}>
			<h1>Gastos</h1>
			{open ? <Open /> : <Closed />}
		</button>
	);
}

export { MenuButton };
