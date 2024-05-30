import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import styles from "../../../css/dashboard.module.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Sidebar from "../studentComponents/sidebar/Sidebar";
import Navbar from "../studentComponents/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "This is the student dashboard.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  if (session && session.user.role !== "student") {
    redirect("/admin/dashboard");
  }
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
