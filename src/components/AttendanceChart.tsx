"use client";
import Image from "next/image";
import React from "react";

import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "Mon",
		present: 10,
		absent: 58,
	},
	{
		name: "Tue",
		present: 90,
		absent: 80,
	},
	{
		name: "Wed",
		present: 18,
		absent: 40,
	},
	{
		name: "Thur",
		present: 89,
		absent: 48,
	},
	{
		name: "Fri",
		present: 90,
		absent: 50,
	},
];

export default function AttendanceChart() {
	return (
		<div className="w-full h-[450px] bg-white rounded-xl p-4">
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold">Students</h1>
				<Image
					src="/moreDark.png"
					alt="more"
					width={20}
					height={20}
				/>
			</div>
			<ResponsiveContainer width="100%" height="90%">
				<BarChart
					width={50}
					height={300}
					barSize={20}
					data={data}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="name"
						axisLine={false}
						tickLine={false}
					/>
					<YAxis axisLine={false} tickLine={false} />
					<Tooltip />
					<Legend
						align="left"
						verticalAlign="top"
						wrapperStyle={{
							paddingTop: "20px",
							paddingBottom: "40px",
						}}
					/>
					<Bar
						dataKey="present"
						fill="#8884d8"
						activeBar={
							<Rectangle fill="pink" stroke="blue" />
						}
						legendType="circle"
					/>
					<Bar
						dataKey="absent"
						fill="#82ca9d"
						activeBar={
							<Rectangle fill="gold" stroke="purple" />
						}
						legendType="circle"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
