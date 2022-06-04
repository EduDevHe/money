import styles from "./styles.module.css";
import { NavLinks } from "../NavLinks";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/favicon.ico";
import Link from "next/link";
import { MenuButton } from "../MenuButton";

function MobileNavigation() {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => setOpen((open) => !open);

	return (
		<div className={styles.mobileContainer}>
			<MenuButton open={open} onClick={toggleMenu} />

			{open && (
				<nav className={styles.mobileNav}>
					<ul>
						<NavLinks />
					</ul>
				</nav>
			)}
		</div>
	);
}

function DesktopNavigation() {
	return (
		<nav className={styles.desktopNav}>
			<div className={styles.logo}>
				<Image src={logo} alt="logo" />
			</div>

			<ul>
				<NavLinks />
			</ul>

			<div className={styles.userAuth}>
				<Link href="/login">Login</Link>
				<Link href="/register">SignUp</Link>
			</div>
		</nav>
	);
}

export { MobileNavigation, DesktopNavigation };
