import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
        title: "Yantra 2024",
        description: "Yantra Central Hackathon Website",
};

export default async function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="en">
                        <body className={inter.className}>
                                <ToastContainer
                                theme="dark"
                                />
                                {children}
                        </body>
                </html>
        );
}
