"use client";

import Link from "next/link";
import styles from "../../../../../css/menulink.module.css";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  title: string;
  path: string;
  icon: JSX.Element;
}

const MenuLink = ({ item }: { item: MenuLinkProps }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
