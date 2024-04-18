"use client";

// Import the Required Modules
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export const Layout = ({ children }:any) => {
	return <ThemeProvider>{ children }</ThemeProvider>;
}

export default Layout;