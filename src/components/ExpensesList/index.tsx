import { Expense } from "../../models/entities/Expense";
import { HighlightList } from "../HighlightList";
import { HighlightListItem } from "../HighlightListItem";

interface ExpensesListProps {
	expenses: Expense[];
}

function ExpensesList({ expenses }: ExpensesListProps) {
	return (
		<HighlightList>
			{expenses.map(({ title, value }) => (
				<HighlightListItem key={title} icon="$">
					R$ {value}
				</HighlightListItem>
			))}
		</HighlightList>
	);
}

export { ExpensesList };
