import React from "react";

export default function singlePage() {
	return (
		<div className="flex-1 p-4 flex-col xl:flex-row">
			<div className="w-full xl:w/3">
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="bg-tsky py-6 px-4 rounded-md flex-1 flex gap-4">
						<div className="w-1/3"></div>
						<div className="w-2/3"></div>
					</div>
					{/* Small card */}
					<div className="flex-1"></div>
				</div>
				{/* bottom */}
				<div className="">Schedule</div>
			</div>
			{/* right */}
			<div className="w-full xl:w-1/3"></div>
		</div>
	);
}
