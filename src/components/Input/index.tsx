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
			<label className="text--1" htmlFor={name}>
				{label}:
			</label>
			<div className={styles.inputContainer}>
				{icon && <span className={styles.icon}>{icon}</span>}
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
