import React from "react";

export default function Announcement() {
	return (
		<div className="bg-white rounded-xl p-4">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-semibold my-4">
					Announcement
				</h1>
				<button>View More</button>
			</div>
			<div className="flex flex-col gap-4 mt-4">
				<div className="bg-tsky rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">
							Lorem ipsum dolor sit
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2025-01-30
						</span>
					</div>
					<p className="text-sm text-gray-400">
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Maxime, maiores deseru, dolor
						sit amet consectetur adipisicing elit. Maxime
					</p>
				</div>
				<div className="bg-tpurple rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">
							Lorem ipsum dolor sit
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2025-01-30
						</span>
					</div>
					<p className="text-sm text-gray-400">
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Maxime, maiores deseru, dolor
						sit amet consectetur adipisicing elit. Maxime
					</p>
				</div>
				<div className="bg-tyellow rounded-md p-4">
					<div className="flex items-center justify-between">
						<h2 className="font-medium">
							Lorem ipsum dolor sit
						</h2>
						<span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
							2025-01-30
						</span>
					</div>
					<p className="text-sm text-gray-400">
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Maxime, maiores deseru, dolor
						sit amet consectetur adipisicing elit. Maxime
					</p>
				</div>
			</div>
		</div>
	);
}
