import Image from "next/image";
import styles from "../../../../css/sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import MenuLink from "./menulink/Menulink";
import { IoIosStats } from "react-icons/io";
import { getSession } from "@/utils/Session";


type MenuItemType = {
  title: string;
  list: {
    title: string;
    path: string;
    icon: JSX.Element;
  }[];
};

const menuItems: MenuItemType[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/student/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Profile",
        path: "/student/dashboard/profile",
        icon: <CgProfile />,
      },
      {
        title: "Classes",
        path: "/student/dashboard/classes",
        icon: <MdShoppingBag />,
      },
      {
        title: "Routine",
        path: "/student/dashboard/routine",
        icon: <MdShoppingBag />,
      },
      {
        title: "Statistics",
        path: "/student/dashboard/stats",
        icon: <IoIosStats />,
      },
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
