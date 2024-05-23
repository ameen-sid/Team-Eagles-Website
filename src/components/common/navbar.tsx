// Import the Required Modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
	Navbar as MTNavbar,
	Collapse,
	Button,
	IconButton,
	Typography,
} from "@material-tailwind/react";
import {
	StarIcon,
	TrophyIcon,
	UserGroupIcon,
	XMarkIcon,
	Bars3Icon,
} from "@heroicons/react/24/solid";

// Nav Menu Data
const NAV_MENU = [
	{
		name: "Leaderboard",
		icon: TrophyIcon,
		href: "/leaderboard",
	},
	{
		name: "Achievements",
		icon: StarIcon,
		href: "/achievements",
	},
	{
		name: "Join Team",
		icon: UserGroupIcon,
		href: "/join-team",
	},
];

// Interface of NavItem props
interface NavItemProps {
	children: React.ReactNode;
	href?: string;
}

// Function of NavItem Component
const NavItem = ({ children, href }: NavItemProps) => {
	return (
		<li>
			<Typography
				as="a"
				href={href}
				target={href ? "_blank" : "_self"}
				variant="paragraph"
				color="gray"
				className="flex items-center gap-2 font-medium text-gray-900"  
				placeholder={undefined} 
				onPointerEnterCapture={undefined} 
				onPointerLeaveCapture={undefined}			
			>
				{ children }
			</Typography>
		</li>
	);
}

// Function of NavBar Component
export const NavBar = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen((cur) => !cur);
	}

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpen(false),
		);
	}, []);

	return (
		<div className="px-10 sticky top-4 z-50">
			<div className="mx-auto container">
				<MTNavbar
					blurred
					color="white"
					className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6" 
					placeholder={undefined} 
					onPointerEnterCapture={undefined} 
					onPointerLeaveCapture={undefined}				
				>
					<div className="flex items-center justify-between">
						<Link href="/">
							<Typography 
								color="blue-gray" 
								className="text-lg font-bold" 
								placeholder={undefined} 
								onPointerEnterCapture={undefined} 
								onPointerLeaveCapture={undefined}
							>
								Team Eagles
							</Typography>
						</Link>

						<ul className="ml-10 hidden items-center gap-8 lg:flex">
							{ NAV_MENU.map(({ name, icon: Icon, href }) => (
								<NavItem key={name} href={href}>
									<Icon className="h-5 w-5" />
									{name}
								</NavItem>
							))}
						</ul>

						<div className="hidden items-center gap-4 lg:flex">
							<Link 
								href="/signup"
							>
								<Button 
									variant="text" 
									placeholder={undefined} 
									onPointerEnterCapture={undefined} 
									onPointerLeaveCapture={undefined}
								>
									Sign up
								</Button>
							</Link>

							<Link
                				href="/login"
              				>
								<Button 
									color="gray"
									placeholder={undefined} 
									onPointerEnterCapture={undefined} 
									onPointerLeaveCapture={undefined}
								>
									Log in
								</Button>
							</Link>
						</div>

						<IconButton
							variant="text"
							color="gray"
							onClick={handleOpen}
							className="ml-auto inline-block lg:hidden" 
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}            			
						>
							{ open ? (
								<XMarkIcon strokeWidth={2} className="h-6 w-6" />
							) : (
								<Bars3Icon strokeWidth={2} className="h-6 w-6" />
							)}
						</IconButton>
					</div>

					<Collapse open={open}>
						<div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
							<ul className="flex flex-col gap-4">
								{ NAV_MENU.map(({ name, icon: Icon, href }) => (
									<NavItem key={name} href={href}>
										<Icon className="h-5 w-5" />
										{name}
									</NavItem>
								))}
							</ul>
							
							<div className="mt-6 mb-4 flex items-center gap-4">
								<Link href="/signup">
									<Button 
										variant="text" 
										placeholder={undefined} 
										onPointerEnterCapture={undefined} 
										onPointerLeaveCapture={undefined}
									>
										Sign Up
									</Button>
								</Link>
								
								<Link
                  					href="/login"
                				>
                  					<Button 
										color="gray" 
										placeholder={undefined} 
										onPointerEnterCapture={undefined} 
										onPointerLeaveCapture={undefined}
									>
										Login
									</Button>
                				</Link>
							</div>
						</div>
					</Collapse>
				</MTNavbar>
			</div>
		</div>
	);
}

// Export the NavBar Component
export default NavBar;