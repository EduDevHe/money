function toBrl(value: number) {
	return value.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});
}

export { toBrl };
