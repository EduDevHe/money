import { Category } from "../entities/Category";

class CategoryRepository {
	getSpentPercentage(category: Category, spent: number) {
		return (spent / 100) * category.limit;
	}

	getAll() {
		return [
			new Category("Comida", 200),
			new Category("Estilo", 100),
			new Category("Conhecimento", 800),
			new Category("Mimos", 800),
			new Category("Saúde", 800),
		];
	}
}

export { CategoryRepository };
