import { Category } from "../../models/entities/Category";
import { toBrl } from "../../utils/Money";
import styles from "./styles.module.css";

interface ExpenseWarnProps {
	spent: number;
	category: Category;
}

function ExpenseWarn({ spent, category }: ExpenseWarnProps) {
	const remain = category.limit - spent * category.limit;
	const percentage = spent * 100;

	return (
		<section className={styles.warn}>
			<p>
				Você já gastou {percentage}% do seu saldo dedicado a categoria{" "}
				<span>{category.name}</span>.
			</p>

			<strong className={styles.strong}>
				{toBrl(remain)} restantes de {toBrl(category.limit)}
			</strong>
		</section>
	);
}

export { ExpenseWarn };
