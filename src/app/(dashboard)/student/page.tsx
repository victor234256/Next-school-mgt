import Announcement from "@/components/Announcement";
import EventCalendar from "@/components/Calendar";
import Timetable from "@/components/Timetable";
import React from "react";

export default function StudentPage() {
	return (
		<div className="p-4 flex gap-4 flex-col xl:flex-row">
			{/* left */}
			<div className="w-full xl:w-2/3">
				<div className="h-full bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">
						Schedule Year ({4})
					</h1>
					<Timetable />
				</div>
			</div>
			{/* right */}
			<div className="w-full lg:w-1/3 flex flex-col gap-8">
				<EventCalendar />
				<Announcement />
			</div>
		</div>
	);
}
