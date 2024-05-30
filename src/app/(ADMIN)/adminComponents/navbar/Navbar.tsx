"use client";
import { usePathname } from "next/navigation";
import styles from "../../../../css/navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Admin Dashboard</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <LuLogOut size={20} onClick={handleSignout} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
