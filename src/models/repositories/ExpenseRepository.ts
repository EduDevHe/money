import { Category } from "../entities/Category";
import { Expense } from "../entities/Expense";

class ExpenseRepository {
	/**
	 * Obtém todas as dívidas ativas para o usuário atual
	 */
	async getActive() {
		const foodCategory = new Category("Comida", 200);
		const clothCategory = new Category("Estilo", 100);
		const knowledgeCategory = new Category("Conhecimento", 800);

		// ! FAKE DATA
		const mockedExpenses = [
			new Expense("Lanche", 10, foodCategory),
			new Expense("Sapato", 100, clothCategory),
			new Expense("Livro", 200, knowledgeCategory),
			new Expense("Livro", 200, knowledgeCategory),
			new Expense("Livro", 200, knowledgeCategory),
		];

		return mockedExpenses;
	}

	/**
	 * Organiza o array pela data de criação da dívida
	 */
	sortByCreation(expenses: Expense[]) {
		const byDate = (a: Expense, b: Expense) => {
			return a.createdAt.getTime() - b.createdAt.getTime();
		};

		return expenses.sort(byDate);
	}

	/**
	 * Organiza o array pelo valor da dívida
	 */
	sortByValue(expenses: Expense[]) {
		const byValue = (a: Expense, b: Expense) => {
			return a.value - b.value;
		};

		return expenses.sort(byValue);
	}
}

export { ExpenseRepository };
