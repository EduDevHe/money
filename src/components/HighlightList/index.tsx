import { OlHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface OrderedListProps extends OlHTMLAttributes<HTMLOListElement> {}

function HighlightList(props: OrderedListProps) {
	return <ol {...props} className={styles.list} />;
}

export { HighlightList };
