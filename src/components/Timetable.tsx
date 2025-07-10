"use client";
import {
	Calendar,
	momentLocalizer,
	View,
	Views,
} from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const Timetable = () => {
	const [view, setView] = useState<View>(Views.WORK_WEEK);
	const localizer = momentLocalizer(moment);
	function handleOnChangeView(selectedView: View) {
		setView(selectedView);
	}
	return (
		<Calendar
			localizer={localizer}
			events={calendarEvents}
			startAccessor="start"
			endAccessor="end"
			views={["work_week", "day"]}
			view={view}
			style={{ height: "90% " }}
			onView={handleOnChangeView}
			min={new Date(2025, 5, 1, 8, 0)} // 8:00 AM
			max={new Date(2025, 6, 30, 16, 0)} // 4:00 PM
		/>
	);
};

export default Timetable;
