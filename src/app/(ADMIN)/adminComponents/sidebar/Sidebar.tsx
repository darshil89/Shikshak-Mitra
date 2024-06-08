import Image from "next/image";
import styles from "../../../../css/sidebar.module.css";
import { MdDashboard, MdClass } from "react-icons/md";
import { MdGroups } from "react-icons/md";

import { SiCoursera } from "react-icons/si";

import { CgProfile } from "react-icons/cg";
import MenuLink from "./menulink/Menulink";
import { getSession } from "@/utils/Session";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Profile",
        path: "/admin/dashboard/profile",
        icon: <CgProfile />,
      },
      {
        title: "Create Course",
        path: "/admin/dashboard/course",
        icon: <SiCoursera />,
      },
      {
        title: "Create Class",
        path: "/admin/dashboard/classes",
        icon: <MdClass />,
      },
      {
        title: "Check",
        path:"/admin/dashboard/check",
        icon: <MdGroups />

      }
    ],
  },
];

const Sidebar = async () => {
  const session = await getSession();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={session?.user.image || "/avatar.png"}
          alt="avatar"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{session?.user.email}</span>
          <span className={styles.userTitle}>{session?.user.name}</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
