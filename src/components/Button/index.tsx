import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
	return <button {...props} className={styles.button} />;
}

export { Button };
