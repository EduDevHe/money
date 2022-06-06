import { LiHTMLAttributes, ReactElement } from "react";
import styles from "./styles.module.css";

interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
	icon: ReactElement | string | number;
}

function HighlightListItem({ icon, children, ...rest }: ListItemProps) {
	return (
		<li {...rest} className={styles.item}>
			<div className={styles.icon}>{icon}</div>
			{children}
		</li>
	);
}

export { HighlightListItem };
