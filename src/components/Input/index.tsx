import { InputHTMLAttributes, ReactElement } from "react";
import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	icon?: ReactElement | string;
}

function Input({ name, label, icon, ...rest }: InputProps) {
	return (
		<div className={styles.container}>
			<label htmlFor={name} className={styles.label}>
				{label}:
			</label>
			<div className={styles.inputContainer}>
				{icon && <span>{icon}</span>}
				<input
					type="number"
					name={name}
					id={name}
					className={styles.input}
					{...rest}
				/>
			</div>
		</div>
	);
}

export { Input };
