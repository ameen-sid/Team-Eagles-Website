// Import the Required Modules
import React, { useEffect, useState } from "react";
import { 
	Navbar as MTNavbar,
	Collapse,
	Button,
	IconButton,
	Typography,
} from "@material-tailwind/react";
import {
	RectangleStackIcon,
  	UserCircleIcon,
	CommandLineIcon,
	XMarkIcon,
	Bars3Icon,
} from "@heroicons/react/24/solid";

// Nav Menu Data
const NAV_MENU = [
	{
		name: "Page",
		icon: RectangleStackIcon,
	},
	{
		name: "Account",
		icon: UserCircleIcon,
	},
	{
		name: "Docs",
		icon: CommandLineIcon,
		href: "https://www.material-tailwind.com/docs/react/installation",
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
				href={href || "#"}
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
						<Typography 
							color="blue-gray" 
							className="text-lg font-bold" 
							placeholder={undefined} 
							onPointerEnterCapture={undefined} 
							onPointerLeaveCapture={undefined}
						>
							Team Eagles
						</Typography>

						<ul className="ml-10 hidden items-center gap-8 lg:flex">
							{ NAV_MENU.map(({ name, icon: Icon, href }) => (
								<NavItem key={name} href={href}>
									<Icon className="h-5 w-5" />
									{name}
								</NavItem>
							))}
						</ul>

						<div className="hidden items-center gap-4 lg:flex">
							<a 
								href="http://localhost:3000/signup"
							>
								<Button 
									variant="text" 
									placeholder={undefined} 
									onPointerEnterCapture={undefined} 
									onPointerLeaveCapture={undefined}
								>
									Sign up
								</Button>
							</a>

							<a
                				href="http://localhost:3000/login"
                				target="_blank"
              				>
								<Button 
									color="gray"
									placeholder={undefined} 
									onPointerEnterCapture={undefined} 
									onPointerLeaveCapture={undefined}
								>
									Log in
								</Button>
							</a>
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
								<a href="http://localhost:3000/signup">
									<Button 
										variant="text" 
										placeholder={undefined} 
										onPointerEnterCapture={undefined} 
										onPointerLeaveCapture={undefined}
									>
										Sign Up
									</Button>
								</a>
								
								<a
                  					href="http://localhost:3000/login"
                  					target="_blank"
                				>
                  					<Button 
										color="gray" 
										placeholder={undefined} 
										onPointerEnterCapture={undefined} 
										onPointerLeaveCapture={undefined}
									>
										Login
									</Button>
                				</a>
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