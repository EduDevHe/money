import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ExpensesList } from "../../components/ExpensesList";
import { ExpenseWarn } from "../../components/ExpenseWarn";
import { LineGraph } from "../../components/LineGraph";
import { CategorySelect } from "../../components/CategorySelect";
import { ExpensesProps } from "../../pages/expenses";
import styles from "./styles.module.css";

function ExpensesHome(props: ExpensesProps) {
	const { categoryExpense, recentExpenses, topExpenses, allCategories } = props;

	const category = categoryExpense.category;

	return (
		<div className={styles.container}>
			<LineGraph />

			<aside className={styles.aside}>
				<section className={styles.textData}>
					<h3 className="text--1">Ranking de gastos</h3>
					<ExpensesList data-cy="last-expenses" expenses={recentExpenses} />

					<h3 className="text--1">Últimos gastos</h3>
					<ExpensesList data-cy="top-expenses" expenses={topExpenses} />

					<ExpenseWarn
						data-cy="expense-warn"
						spent={0.35}
						category={category}
					/>
				</section>

				<form className={styles.form} action="/expense/new" method="post">
					<Input
						data-cy="expense-value"
						label="Valor"
						name="expense-value"
						icon="R$"
					/>

					<CategorySelect
						data-cy="expense-category"
						label="Categoria"
						name="expense-category"
						categories={allCategories}
					/>

					<Button>Salvar</Button>
				</form>
			</aside>
		</div>
	);
}

export { ExpensesHome };
