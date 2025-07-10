import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
	{
		title: "MENU",
		items: [
			{
				icon: "/home.png",
				label: "Home",
				href: "/",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/teacher.png",
				label: "Teachers",
				href: "/lists/teachers",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/student.png",
				label: "Students",
				href: "/lists/students",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/parent.png",
				label: "Parents",
				href: "/lists/parents",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/subject.png",
				label: "Subjects",
				href: "/lists/subjects",
				visible: ["admin"],
			},
			{
				icon: "/class.png",
				label: "Classes",
				href: "/lists/classes",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/lesson.png",
				label: "Lessons",
				href: "/lists/lessons",
				visible: ["admin", "teacher"],
			},
			{
				icon: "/exam.png",
				label: "Exams",
				href: "/lists/exams",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/assignment.png",
				label: "Assignments",
				href: "/lists/assignments",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/result.png",
				label: "Results",
				href: "/lists/results",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/attendance.png",
				label: "Attendance",
				href: "/lists/attendance",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/calendar.png",
				label: "Events",
				href: "/lists/events",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/message.png",
				label: "Messages",
				href: "/list/messages",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/announcement.png",
				label: "Announcements",
				href: "/lists/announcements",
				visible: ["admin", "teacher", "student", "parent"],
			},
		],
	},
	{
		title: "OTHER",
		items: [
			{
				icon: "/profile.png",
				label: "Profile",
				href: "/profile",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/setting.png",
				label: "Settings",
				href: "/settings",
				visible: ["admin", "teacher", "student", "parent"],
			},
			{
				icon: "/logout.png",
				label: "Logout",
				href: "/logout",
				visible: ["admin", "teacher", "student", "parent"],
			},
		],
	},
];

export default function Menu() {
	return (
		<div className="mt-4 text-sm">
			{menuItems.map((i) => (
				<div key={i.title} className="flex flex-col gap-2">
					<span className="hidden lg:block text-gray-400 font-light my-4">
						{i.title}
					</span>
					{i.items.map((item) => {
						if (item.visible.includes(role)) {
							return (
								<Link
									href={item.href}
									key={item.label}
									className="flex gap-4 items-center justify-center lg:justify-start text-gray-500 py-2 md:px-2 rounded-md hover:bg-tsky"
								>
									<Image
										src={item.icon}
										alt={item.label}
										width={20}
										height={20}
									/>
									<span className="hidden lg:block">
										{item.label}
									</span>
								</Link>
							);
						}
					})}
				</div>
			))}
		</div>
	);
}
