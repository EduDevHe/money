import { Category } from "./Category";

type OptionalDate = Date | null | undefined;

class Expense {
	title: string;
	value: number;
	category: Category;
	active: boolean;
	createdAt: Date;
	expireAt: Date;
	payedAt: OptionalDate;

	constructor(
		title: string,
		value: number,
		category: Category,
		createdAt?: OptionalDate,
		expireAt?: OptionalDate,
		payedAt?: OptionalDate,
	) {
		const now = new Date();

		this.category = category;
		this.title = title;
		this.value = value;
		this.createdAt = createdAt ?? now;
		this.expireAt = expireAt ?? now;
		this.payedAt = payedAt;
		this.active = !!this.payedAt;
	}
}

export { Expense };
