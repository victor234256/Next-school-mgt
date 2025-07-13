import FormData from "@/components/FormData";
import Pagination from "@/components/Pagination";
import SearchInput from "@/components/SearchInput";
import Table from "@/components/Table";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Student = {
	id: number;
	studentId: string;
	name: string;
	email?: string;
	photo: string;
	phone?: string;
	class: string;
	grade: number;
	address: string;
};

const columns = [
	{ header: "Info", accessor: "info" },
	{
		header: "Students ID",
		accessor: "studentId",
		className: "hidden md:table-cell",
	},

	{
		header: "Grade",
		accessor: "grade",
		className: "hidden md:table-cell",
	},

	{
		header: "Phone",
		accessor: "phone",
		className: "hidden lg:table-cell",
	},
	{
		header: "Address",
		accessor: "address",
		className: "hidden lg:table-cell",
	},
	{
		header: "Actions",
		accessor: "actions",
	},
];
export default function StudentsListPage() {
	const rows = (item: Student) => (
		<tr
			key={item.id}
			className="border-b border-gray-200 even:bg-slate-50 hover:bg-tlightPupple"
		>
			<td className="flex items-center gap-3 p-4">
				<Image
					src={item.photo}
					height={40}
					width={40}
					className="rounded-full object-cover md:hidden xl:block w-10 h-10"
					alt="profile image"
				/>
				<div className="flex flex-col">
					<h2 className="font-semibold">{item.name}</h2>
					<p className="text-xs text-gray-500">
						{item.class}
					</p>
				</div>
			</td>
			<td className="hidden md:table-cell">
				{item.studentId}
			</td>
			<td className="hidden md:table-cell">{item.grade}</td>

			<td className="hidden md:table-cell">{item.phone}</td>
			<td className="hidden md:table-cell">
				{item.address}
			</td>
			<td>
				<div className="flex items-center gap-3">
					<Link href={`/lists/students/${item.id}`}>
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
						<FormData
							type="delete"
							table="student"
							id={item.id}
						/>
					)}
				</div>
			</td>
		</tr>
	);
	return (
		<div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
			<div className="flex items-center justify-between">
				<h1 className="hidden md:block text-lg font-semibold">
					All Students
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
							<FormData type="create" table="student" />
						)}
					</div>
				</div>
			</div>
			<div>
				<Table
					columns={columns}
					rows={rows}
					data={studentsData}
				/>
				<Pagination />
			</div>
		</div>
	);
}
