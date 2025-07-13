"use client";
import {
	Calendar,
	momentLocalizer,
	View,
	Views,
} from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const Timetable = () => {
	const [view, setView] = useState<View>(Views.WORK_WEEK);
	const localizer = momentLocalizer(moment);
	function handleOnChangeView(selectedView: View) {
		setView(selectedView);
	}
	const today = new Date();
	const minTime = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate(),
		8,
		0,
	);

	function getStartOfWeek(today = new Date()) {
		const day = today.getDay(); // 0 (Sun) – 6 (Sat)
		const diff =
			today.getDate() - day + (day === 0 ? -6 : 1); // Adjust if Sunday
		const monday = new Date(today.setDate(diff));
		monday.setHours(0, 0, 0, 0);
		return monday;
	}

	function getDateWithTime(
		baseDate: Date,
		dayOffset: number,
		hour: number,
		minute: number,
	) {
		const date = new Date(baseDate);
		date.setDate(baseDate.getDate() + dayOffset);
		date.setHours(hour, minute, 0, 0);
		return date;
	}

	const getRecurringCalendarEvents = () => {
		const monday = getStartOfWeek();

		return [
			// Monday
			{
				title: "Math",
				allDay: false,
				start: getDateWithTime(monday, 0, 8, 0),
				end: getDateWithTime(monday, 0, 8, 45),
			},
			{
				title: "English",
				allDay: false,
				start: getDateWithTime(monday, 0, 9, 0),
				end: getDateWithTime(monday, 0, 9, 45),
			},
			{
				title: "Biology",
				allDay: false,
				start: getDateWithTime(monday, 0, 10, 0),
				end: getDateWithTime(monday, 0, 10, 45),
			},
			{
				title: "Physics",
				allDay: false,
				start: getDateWithTime(monday, 0, 11, 0),
				end: getDateWithTime(monday, 0, 11, 45),
			},
			{
				title: "Chemistry",
				allDay: false,
				start: getDateWithTime(monday, 0, 13, 0),
				end: getDateWithTime(monday, 0, 13, 45),
			},
			{
				title: "History",
				allDay: false,
				start: getDateWithTime(monday, 0, 14, 0),
				end: getDateWithTime(monday, 0, 14, 45),
			},

			// Tuesday
			{
				title: "English",
				allDay: false,
				start: getDateWithTime(monday, 1, 9, 0),
				end: getDateWithTime(monday, 1, 9, 45),
			},
			{
				title: "Biology",
				allDay: false,
				start: getDateWithTime(monday, 1, 10, 0),
				end: getDateWithTime(monday, 1, 10, 45),
			},
			{
				title: "Physics",
				allDay: false,
				start: getDateWithTime(monday, 1, 11, 0),
				end: getDateWithTime(monday, 1, 11, 45),
			},
			{
				title: "History",
				allDay: false,
				start: getDateWithTime(monday, 1, 14, 0),
				end: getDateWithTime(monday, 1, 14, 45),
			},

			// Wednesday
			{
				title: "Math",
				allDay: false,
				start: getDateWithTime(monday, 2, 8, 0),
				end: getDateWithTime(monday, 2, 8, 45),
			},

			// Thursday
			{
				title: "Chemistry",
				allDay: false,
				start: getDateWithTime(monday, 3, 13, 0),
				end: getDateWithTime(monday, 3, 13, 45),
			},

			// Friday
			{
				title: "History",
				allDay: false,
				start: getDateWithTime(monday, 4, 14, 0),
				end: getDateWithTime(monday, 4, 14, 45),
			},
		];
	};
	return (
		<Calendar
			localizer={localizer}
			events={getRecurringCalendarEvents()} // ✅ Use dynamic events
			startAccessor="start"
			endAccessor="end"
			views={["work_week", "day"]}
			view={view}
			style={{ height: "90%" }}
			onView={handleOnChangeView}
			min={minTime}
			max={
				new Date(
					today.getFullYear(),
					today.getMonth(),
					today.getDate(),
					16,
					0,
				)
			}
		/>
	);
};

export default Timetable;
