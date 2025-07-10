import Link from "next/link";

const Homepage = () => {
	return (
		<div className="min-h-screen">
			<div className="h-[100vh] flex flex-col justify-center items-center align-middle gap-4">
				<h2 className="text-4xl font-bold">Site in Progress</h2>
				<Link href="/admin">
					{" "}
					<button className="bg-purple-600 font-semibold border-4 border-tyellow py-3 px-4 rounded-xl text-lg text-white">Go to Admin Page</button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
