import Announcement from "@/components/Announcement";
import EventCalendar from "@/components/Calendar";
import Performance from "@/components/Performance";
import Timetable from "@/components/Timetable";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function StudentSinglePage() {
	return (
		<div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
			{/* LEFT */}
			<div className="w-full xl:w-2/3">
				{/* TOP */}
				<div className="flex flex-col lg:flex-row gap-4">
					{/* USER INFO CARD */}
					<div className="bg-tsky py-6 px-4 rounded-md flex-1 flex gap-4">
						<div className="w-1/3">
							<Image
								src="/profile.jpeg"
								alt=""
								width={144}
								height={144}
								className="w-36 h-36 rounded-full object-cover"
							/>
						</div>
						<div className="w-2/3 flex flex-col justify-between gap-4">
							<div className="flex items-center gap-4">
								<h1 className="text-xl font-semibold">
									Leonard Snyder
								</h1>

								{/* table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                 */}
							</div>
							<p className="text-sm text-gray-500">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit.
							</p>
							<div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image
										src="/blood.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>A+</span>
								</div>
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image
										src="/date.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>January 2025</span>
								</div>
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image
										src="/mail.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>user@gmail.com</span>
								</div>
								<div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
									<Image
										src="/phone.png"
										alt=""
										width={14}
										height={14}
									/>
									<span>+1 234 567</span>
								</div>
							</div>
						</div>
					</div>
					{/* SMALL CARDS */}
					<div className="flex-1 flex gap-4 justify-between flex-wrap">
						{/* CARD */}
						<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
							<Image
								src="/singleAttendance.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">
									90%
								</h1>
								<span className="text-sm text-gray-400">
									Attendance
								</span>
							</div>
						</div>
						{/* CARD */}
						<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
							<Image
								src="/singleBranch.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">
									5th
								</h1>
								<span className="text-sm text-gray-400">
									Grade
								</span>
							</div>
						</div>
						{/* CARD */}
						<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
							<Image
								src="/singleLesson.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">8</h1>
								<span className="text-sm text-gray-400">
									Subjects
								</span>
							</div>
						</div>
						{/* CARD */}
						<div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
							<Image
								src="/singleClass.png"
								alt=""
								width={24}
								height={24}
								className="w-6 h-6"
							/>
							<div className="">
								<h1 className="text-xl font-semibold">5</h1>
								<span className="text-sm text-gray-400">
									Class
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* BOTTOM */}
				<div className="mt-4 bg-white rounded-md p-4 h-[800px]">
					<h1>Student&apos;s Schedule</h1>
					<Timetable />
				</div>
			</div>
			{/* RIGHT */}
			<div className="w-full xl:w-1/3 flex flex-col gap-4">
				<div className="bg-white p-4 rounded-md">
					<h1 className="text-xl font-semibold">
						Shortcuts
					</h1>
					<div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
						<Link
							className="p-3 rounded-md bg-tlightSky"
							href="/"
						>
							Student&apos;s Classes
						</Link>
						<Link
							className="p-3 rounded-md bg-tpurple"
							href="/"
						>
							Student&apos;s Teacher
						</Link>
						<Link
							className="p-3 rounded-md bg-tlightYellow"
							href="/"
						>
							Student&apos; Result
						</Link>
						<Link
							className="p-3 rounded-md bg-pink-50"
							href="/"
						>
							Student&apos;s Exams
						</Link>
						<Link
							className="p-3 rounded-md bg-tlightSky"
							href="/"
						>
							Student&apos;s Assignments
						</Link>
					</div>
				</div>
				<Performance />
				<Announcement />
			</div>
		</div>
	);
}
