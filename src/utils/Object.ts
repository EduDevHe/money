/**
 * Transforma um tipo objeto com tipos de dados peculiares em um objeto comum no Javascript.
 * Graças ao duck typing a tipagem do TS continua funcionando
 */
function lean(object: Object) {
	return JSON.parse(JSON.stringify(object));
}

export { lean };
