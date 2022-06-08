import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
	},
};

const json = {
	data: {
		month: "Janeiro",
		spentPerDay: [
			0.8, 10, 40, 10, 5, 200, 100, 23, 20, 150, 50, 100, 10, 29, 100, 102, 12,
			21, 33, 3, 29, 12, 123, 123, 123, 123, 12, 213, 123, 10, 10,
		],
		earnsPerDay: [
			0, 0, 0, 0, 1300, 0, 10, 3, 20, 0, 0, 0, 0, 9, 100, 10, 0, 0, 0, 0, 0, 0,
			13, 23, 163, 3, 0, 0, 0, 0, 10,
		],
		totalDebtPerDay: [
			0.8, 10.8, 50.8, 60.8, 65.8, 265.8, 365.8, 388.8, 408.8, 558.8, 608.8,
			708.8, 718.8, 747.8, 847.8, 949.8, 961.8, 982.8, 1015.8, 1018.8, 1047.8,
			1059.8, 1182.8, 1305.8, 1428.8, 1551.8, 1563.8, 1776.8, 1899.8, 1909.8,
			1919.8,
		],
		totalInvoicePerDay: [
			0, 0, 0, 0, 1300, 1300, 1310, 1313, 1333, 1333, 1333, 1333, 1333, 1342,
			1442, 1452, 1452, 1452, 1452, 1452, 1452, 1452, 1465, 1488, 1651, 1654,
			1654, 1654, 1654, 1654, 1664,
		],
		totalPerDay: [
			-0.8, -10.8, -50.8, -60.8, 1234.2, 1034.2, 944.2, 924.2, 924.2, 774.2,
			724.2, 624.2, 614.2, 594.2, 594.2, 502.2, 490.2, 469.2, 436.2, 433.2,
			404.2, 392.2, 282.2, 182.2, 222.2, 102.2, 90.2, -122.79, -245.79, -255.79,
			-255.79,
		],
	},
};

function sumUp(array: number[]) {
	let newArr: number[] = [];

	array.reduce((prev, current) => {
		newArr.push(prev + current);
		return prev + current;
	}, 0);

	return newArr;
}

const labels = json.data.totalPerDay.map((_, index) => index + 1);

const data = {
	labels,
	datasets: [
		{
			label: "Entrada",
			data: json.data.totalInvoicePerDay,
			borderColor: "rgb(206, 1, 45)",
			backgroundColor: "rgb(206, 1, 45)",
		},
		{
			label: "Saída",
			data: json.data.totalDebtPerDay,
			borderColor: "rgb(96, 214, 41)",
			backgroundColor: "rgb(96, 214, 41)",
			borderRadius: "50px",
		},
		{
			label: "Saldo",
			data: json.data.totalPerDay,
			borderColor: "rgb(240, 225, 23)",
			backgroundColor: "rgb(240, 225, 23)",
		},
	],
};

export function LineGraph() {
	return (
		<div className={styles.container}>
			<div className={styles.graphContainer}>
				<Line options={options} data={data} />
			</div>
		</div>
	);
}
