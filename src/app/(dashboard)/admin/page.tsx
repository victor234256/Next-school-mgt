import CounterChart from "@/components/CounterChart";
import UserCard from "@/components/UserCard";
import React from "react";

export default function AdminPage() {
	return (
		<div className="p-4 flex gap-4 flex-col md:flex-rol">
			{/* left main */}
			<div className="w-full lg:w-2/3 flex flex-col gap-8">
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCard type="Student" />
					<UserCard type="teacher" />
					<UserCard type="parent" />
					<UserCard type="staff" />
				</div>
				{/* middle chart */}
				<div className="flex gap-4 flex-col lg:flex-row">
					{/* count chart */}
					<div className="w-full lg:w-1/3 h-[450px]">
						<CounterChart />
					</div>
					{/* Attendance */}
					<div className="w-full lg:w-2/3 h-[450px]"></div>
				</div>
			</div>
			{/* Right - Aside */}
			<div className="w-full lg:w-1/3"></div>
		</div>
	);
}
