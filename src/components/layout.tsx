"use client";

// Import the Required Modules
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

// Interface of Layout props
interface Props { children: any }

// Function of Layout Component
export const Layout = ({ children }: Props) => {
	return <ThemeProvider>{ children }</ThemeProvider>;
}

// Export the Layout Component
export default Layout;