import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "../../../css/dashboard.module.css";
import Sidebar from "../adminComponents/sidebar/Sidebar";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/libs/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "This is the admin dashboard.",
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

  if (session && session.user.role !== "admin") {
    redirect(`${session.user.role}/dashboard`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        
        {children}
      </div>
    </div>
  );
}
