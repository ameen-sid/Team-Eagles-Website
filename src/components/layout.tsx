"use client";

// Import the Required Modules
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface Props {
	children: any
}

export const Layout = ({ children }: Props) => {
	return <ThemeProvider>{ children }</ThemeProvider>;
}

export default Layout;