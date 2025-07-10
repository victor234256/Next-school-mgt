import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Subject = {
	id: number;
	name: string;
	teachers: string[];
};

const columns = [
	{ header: "Subject Name", accessor: "name" },
	{
		header: "Teachers",
		accessor: "teachers",
		className: "hidden md:table-cell",
	},

	{
		header: "Actions",
		accessor: "actions",
	},
];
export default function StudentsListPage() {
	const rows = (item: Subject) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 hover:bg-tlightPupple"
		>
			<td className="flex items-center gap-3 p-4">
				<div className="flex flex-col">
					<h2 className="font-semibold">{item.name}</h2>
				</div>
			</td>
			<td className="hidden md:table-cell">
				{item.teachers.join(" , ")}
			</td>

			<td>
				<div className="flex items-center gap-3">
					<Link href={`/lists/teachers/${item.id}`}>
						<button className=" w-7 h-7 rounded-full bg-tsky flex items-center justify-center">
							<Image
								src="/view.png"
								alt="view "
								height={15}
								width={15}
							/>
						</button>
					</Link>
					{role === "admin" && (
						<button className=" w-7 h-7 rounded-full bg-tpurple flex items-center justify-center">
							<Image
								src="/delete.png"
								alt="delete"
								height={15}
								width={15}
							/>
						</button>
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			<div className="flex items-center justify-between">
				<h1 className="hidden md:block text-lg font-semibold">
					All Subjects
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
							<button className="w-8 h-8 flex items-center justify-center rounded-full bg-tyellow">
								<Image
									src="/plus.png"
									alt="plus"
									height={14}
									width={14}
								/>
							</button>
						)}
					</div>
				</div>
			</div>
			<div>
				<Table
					columns={columns}
					rows={rows}
					data={subjectsData}
				/>
				<Pagination />
			</div>
		</div>
	);
}
