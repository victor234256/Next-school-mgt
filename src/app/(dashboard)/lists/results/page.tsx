import FormData from "@/components/FormData";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";
import {
	assignmentsData,
	resultsData,
	role,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Result = {
	id: number;
	name: string;
	teacher: string;
	student: string;
	type: "exam" | "assignment";
	date: string;
	score: number;
	class: string;
};

const columns = [
	{ header: "Subject Name", accessor: "name" },
	{
		header: "Student",
		accessor: "student",
	},
	{
		header: "Score",
		accessor: "score",
		className: "hidden md:table-cell",
	},
	{
		header: "Teacher",
		accessor: "teacher",
		className: "hidden md:table-cell",
	},
	{
		header: "Class",
		accessor: "class",
		className: "hidden md:table-cell",
	},
	{
		header: "Date",
		accessor: "date",
		className: "hidden md:table-cell",
	},

	{
		header: "Actions",
		accessor: "actions",
	},
];
export default function ResultListPage() {
	const rows = (item: Result) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 hover:bg-tlightPupple"
		>
			<td className="flex items-center gap-3 p-4">
				<div className="flex flex-col">
					<h2 className="font-semibold">{item.name}</h2>
				</div>
			</td>
			<td>{item.student}</td>
			<td className="hidden md:table-cell">{item.score}</td>

			<td>{item.teacher}</td>
			<td className="hidden md:table-cell">{item.class}</td>
			<td className="hidden md:table-cell">{item.date}</td>
			<td>
				<div className="flex items-center gap-3">
					{role === "admin" && (
						<>
							<FormData
								type="update"
								table="result"
								data={item}
							/>
							<FormData
								type="delete"
								table="result"
								id={item.id}
							/>
						</>
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			<div className="flex items-center justify-between">
				<h1 className="hidden md:block text-lg font-semibold">
					All Results
				</h1>
				<div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
					<SearchInput />
					<div className="flex items-center gap-4 self-end">
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-tyellow">
							<Image
								src="/filter.png"
								alt="filter"
								height={14}
								width={14}
							/>
						</button>
						<button className="w-8 h-8 flex items-center justify-center rounded-full bg-tyellow">
							<Image
								src="/sort.png"
								alt="sort"
								height={14}
								width={14}
							/>
						</button>
						{role === "admin" && (
							<FormData type="create" table="result" />
						)}
					</div>
				</div>
			</div>
			<div>
				<Table
					columns={columns}
					rows={rows}
					data={resultsData}
				/>
				<Pagination />
			</div>
		</div>
	);
}
