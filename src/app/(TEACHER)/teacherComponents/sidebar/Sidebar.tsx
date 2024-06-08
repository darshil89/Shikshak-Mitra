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
import { getSession } from "@/utils/Session";


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/teacher/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Profile",
        path: "/teacher/dashboard/profile",
        icon: <CgProfile />,
      },
      {
        title: "Classes",
        path: "/teacher/dashboard/classes",
        icon: <MdShoppingBag />,
      },
      {
        title: "Students",
        path: "/admin/dashboard/allStudents",
        icon: <MdSupervisedUserCircle />,
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
