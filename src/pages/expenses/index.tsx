import { InferGetServerSidePropsType } from "next";
import { Button } from "../../components/Button";
import { ExpensesList } from "../../components/ExpensesList";
import { ExpenseWarn } from "../../components/ExpenseWarn";
import { Category } from "../../models/entities/Category";
import { Expense } from "../../models/entities/Expense";
import { CategoryRepository } from "../../models/repositories/CategoryRepository";
import { ExpenseRepository } from "../../models/repositories/ExpenseRepository";
import { lean } from "../../utils/Object";

interface ExpensesProps {
	recentExpenses: Expense[];
	topExpenses: Expense[];
	categoryExpense: {
		spentPercentage: number;
		category: Category;
	};
}

type ExpensesPage = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Expenses(props: ExpensesPage) {
	const { categoryExpense, recentExpenses, topExpenses } = props;

	const category = categoryExpense.category;

	return (
		<>
			<div data-cy="graph" className="">
				Gráfico
			</div>

			<ExpensesList data-cy="last-expenses" expenses={recentExpenses} />
			<ExpensesList data-cy="top-expenses" expenses={topExpenses} />

			<ExpenseWarn data-cy="expense-warn" spent={0.35} category={category} />

			<form action="/expense/new" method="post">
				<div>
					<label htmlFor="expense-value">Lorem, ipsum:</label>
					<div>
						<span>R$</span>
						<input
							data-cy="expense-value"
							type="number"
							name="expense-value"
							id="expense-value"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="expense-category">Lorem:</label>

					<div>
						<select
							data-cy="expense-category"
							name="expense-category"
							id="expense-category"
						>
							<option>Lorem, ipsum.</option>
							<option>Lorem, ipsum.</option>
							<option>Lorem, ipsum.</option>
							<option>Lorem, ipsum.</option>
							<option>Lorem, ipsum.</option>
							<option>Lorem, ipsum.</option>
						</select>
					</div>
				</div>

				<Button>Salvar</Button>
			</form>
		</>
	);
}

export async function getServerSideProps() {
	const expensesRepository = new ExpenseRepository();

	// Obtém lista de dívidas não quitadas
	const activeExpenses = await expensesRepository.getActive();

	// Organiza as dívidas em arrays ordenados pela data e valor
	const expenseByDate = expensesRepository.sortByCreation(activeExpenses);
	const expenseByValue = expensesRepository.sortByValue(activeExpenses);

	// Separa as últimas três dividas de cada agrupamento
	const recentExpenses = expenseByDate.slice(0, 3);
	const topExpenses = expenseByValue.slice(0, 3);

	// Obtém mais informações sobre uma dívida em destaque
	const biggestExpense = topExpenses[0];

	// Obtém porcentagem gasta do valor limite da categoria da dívida mais alta
	const biggestCategorySpent = CategoryRepository.getSpentPercentage(
		biggestExpense.category,
		biggestExpense.value,
	);

	// Reúne informações sobre a categoria da maior dívida
	const biggestExpenseCategoryData = {
		spentPercentage: biggestCategorySpent,
		category: biggestExpense.category,
	};

	// Retorno das props
	const props: ExpensesProps = lean({
		recentExpenses,
		topExpenses,
		categoryExpense: biggestExpenseCategoryData,
	});

	return {
		props,
	};
}
