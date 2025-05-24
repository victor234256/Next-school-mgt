"use client";
import Image from "next/image";
import React from "react";
import {
	RadialBarChart,
	RadialBar,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Total",
		count: 105,

		fill: "white",
	},
	{
		name: "Girls",
		count: 69,

		fill: "#FAE27C",
	},
	{
		name: "Boys",
		count: 76,

		fill: "#C3EBFA",
	},
];

export default function CounterChart() {
	return (
		<div className="bg-white rounded-xl w-full h-full p-4">
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Students</h1>
				<Image
					src="/moreDark.png"
					alt="more"
					width={20}
					height={20}
				/>
			</div>
			<div className="w-full h-[75%] relative">
				<ResponsiveContainer>
					<RadialBarChart
						cx="50%"
						cy="50%"
						innerRadius="40%"
						outerRadius="100%"
						barSize={30}
						data={data}
					>
						<RadialBar background dataKey="count" />
					</RadialBarChart>
				</ResponsiveContainer>
				<Image
					src="/maleFemale.png"
					alt="male female"
					width={50}
					height={50}
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
			<div className="flex justify-center gap-16">
				<div className="flex flex-col gap-1">
					<div className="w-5 h-5 bg-tsky rounded-full" />
					<h1 className="font-bold">1,233</h1>
					<h2 className="text-xs text-gray-300">
						Boys (55%)
					</h2>
				</div>
				<div className="flex flex-col gap-1">
					<div className="w-5 h-5 bg-tyellow rounded-full" />
					<h1 className="font-bold">1,553</h1>
					<h2 className="text-xs text-gray-300">
						Girls (55%)
					</h2>
				</div>
			</div>
		</div>
	);
}
