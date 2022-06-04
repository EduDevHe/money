import Link from "next/link";
import { NavItem } from "../NavItem";

function NavLinks() {
	return (
		<>
			<NavItem>
				<Link href="/dashboard">Dashboard</Link>
			</NavItem>

			<NavItem>
				<Link href="/budget">Orçamento</Link>
			</NavItem>

			<NavItem>
				<Link href="/intake">Entradas</Link>
			</NavItem>

			<NavItem>
				<Link href="/expenses">Gastos</Link>
			</NavItem>

			<NavItem>
				<Link href="/objectives">Objetivos</Link>
			</NavItem>

			<NavItem>
				<Link href="/categories">Categorias</Link>
			</NavItem>
		</>
	);
}

export { NavLinks };
