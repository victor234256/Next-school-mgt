import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex">
			{/* Left pan */}
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
				<Link
					href="/"
					className="flex items-center gap-3 justify-center lg:justify-start"
				>
					<Image
						src="/logo.png"
						alt="logo"
						width={32}
						height={32}
					/>
					<span className="hidden lg:block">
						School MGT.
					</span>
				</Link>
				<Menu />
			</div>
			{/* main pan */}
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-200 overflow-scroll flex flex-col">
				<Navbar />
				{children}
			</div>
		</div>
	);
}
