"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
	{
		id: 1,
		title: "Morning Assembly",
		time: "08:00 AM",
		description:
			"Daily gathering for announcements and prayers.",
	},
	{
		id: 2,
		title: "Math Quiz",
		time: "10:00 AM",
		description:
			"A short assessment covering algebra and geometry.",
	},
	{
		id: 3,
		title: "Science Fair",
		time: "12:00 PM",
		description:
			"Students showcase science projects in the auditorium.",
	},
	{
		id: 4,
		title: "Lunch Break",
		time: "01:30 PM",
		description:
			"Time for students to eat and relax before afternoon classes.",
	},
	{
		id: 5,
		title: "Staff Meeting",
		time: "03:00 PM",
		description:
			"Weekly meeting to discuss school operations.",
	},
	{
		id: 6,
		title: "Art Exhibition",
		time: "04:30 PM",
		description:
			"Display of student artwork in the gallery.",
	},
	// {
	// 	id: 7,
	// 	title: "Parent-Teacher Conference",
	// 	time: "06:00 PM",
	// 	description:
	// 		"Meeting between parents and teachers to discuss student progress.",
	// },
	// {
	// 	id: 8,
	// 	title: "Drama Rehearsal",
	// 	time: "07:30 PM",
	// 	description:
	// 		"Practice session for the upcoming school play.",
	// },
	// {
	// 	id: 9,
	// 	title: "Evening Study Session",
	// 	time: "08:30 PM",
	// 	description:
	// 		"Quiet time for students to focus on homework and revision.",
	// },
	// {
	// 	id: 10,
	// 	title: "Lights Out",
	// 	time: "10:00 PM",
	// 	description:
	// 		"End of the day. All students should be in their dorms.",
	// },
];

export default function EventCalendar() {
	const [value, onChange] = useState<Value>(new Date());
	return (
		<div className="bg-white p-4 rounded-md">
			<Calendar onChange={onChange} value={value} />
			<div className="flex justify-between items-center">
				<h1 className="text-lg font-semibold my-4">
					Events
				</h1>
				<Image
					src="/moreDark.png"
					alt="more"
					width={20}
					height={20}
				/>
			</div>
			<div className="flex flex-col gap-4">
				{events.map((event) => (
					<div
						key={event.id}
						className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-tsky even:border-t-tyellow"
					>
						<div className="flex items-center justify-between">
							<h1 className="font-semibold text-gray-600">
								{event.title}
							</h1>
							<span className="text-gray-300 text-xs">
								{event.time}
							</span>
						</div>
						<p className="mt-2 text-gray-400 text-sm">
							{event.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
