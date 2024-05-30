import { studentCards } from "@/app/libs/data";
import styles from "../../../../css/dashboard.module.css";
import { FC } from "react";
import Card from "@/app/(ADMIN)/adminComponents/card/card";


interface PagePros {}
const AdminDashboard: FC<PagePros> = async () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {studentCards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className={styles.side}></div>
    </div>
  );
};

export default AdminDashboard;
