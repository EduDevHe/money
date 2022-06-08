import { SelectHTMLAttributes } from "react";
import { Category } from "../../models/entities/Category";
import styles from "./styles.module.css";

interface CategorySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	label: string;
	categories: Category[];
}

function CategorySelect(props: CategorySelectProps) {
	const { categories, label, name, ...rest } = props;

	return (
		<div className={styles.container}>
			<label htmlFor={name} className={styles.label}>
				{label}:
			</label>

			<div>
				<select name={name} className={styles.input} id={name} {...rest}>
					{categories.map(({ name }) => (
						<option key={name}>{name}</option>
					))}
				</select>
			</div>
		</div>
	);
}

export { CategorySelect };
