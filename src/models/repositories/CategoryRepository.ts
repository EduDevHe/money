import { Category } from "../entities/Category";

class CategoryRepository {
	static getSpentPercentage(category: Category, spent: number) {
		return (spent / 100) * category.limit;
	}
}

export { CategoryRepository };
