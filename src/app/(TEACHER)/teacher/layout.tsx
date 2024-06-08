import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import styles from "../../../css/dashboard.module.css";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import Sidebar from "../teacherComponents/sidebar/Sidebar";
import Navbar from "../teacherComponents/navbar/Navbar";
import { authOptions } from "@/app/libs/auth";

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
    redirect("/");
  }

  if (session && session.user.role !== "teacher") {
    redirect(`${session.user.role}/dashboard`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.menu}><Sidebar /></div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
