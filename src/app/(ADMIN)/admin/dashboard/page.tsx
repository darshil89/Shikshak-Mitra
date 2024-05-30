import { adminCards } from "@/app/libs/data";
import styles from "../../../../css/dashboard.module.css";
import Card from "../../adminComponents/card/card";
import { FC } from "react";


interface PagePros {}
const AdminDashboard: FC<PagePros> = async () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {adminCards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default AdminDashboard;
