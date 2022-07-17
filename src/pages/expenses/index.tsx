import { InferGetServerSidePropsType } from "next";
import { Category } from "../../models/entities/Category";
import { Expense } from "../../models/entities/Expense";
import { CategoryRepository } from "../../models/repositories/CategoryRepository";
import { ExpenseRepository } from "../../models/repositories/ExpenseRepository";
import { lean } from "../../utils/Object";
import { ExpensesHome } from "../../modules/expenses";

export interface ExpensesProps {
	recentExpenses: Expense[];
	topExpenses: Expense[];
	categoryExpense: {
		spentPercentage: number;
		category: Category;
	};
	allCategories: Category[];
}

type ExpensesPage = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Expenses(props: ExpensesPage) {
	return <ExpensesHome {...props} />;
}

export async function getServerSideProps() {
	const categoryRepository = new CategoryRepository();

	const allCategories = categoryRepository.getAll();

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
	const biggestCategorySpent = categoryRepository.getSpentPercentage(
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
		allCategories,
	});

	return {
		props,
	};
}
