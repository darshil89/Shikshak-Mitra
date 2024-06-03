// "use client";
import { studentCards } from "@/app/libs/data";
import styles from "../../../../css/dashboard.module.css";
import { FC } from "react";
import Card from "@/app/(ADMIN)/adminComponents/card/card";
import { api } from "../../../../../trpc-client/server-client";
// import { trpc } from "../../../../../trpc-client/client";

interface PagePros {}
const StudentDashboard: FC<PagePros> = async () => {
  //client side method
  // const darshil = trpc.darshil.useQuery();

  // console.log(darshil.data?.text);

  //server side method

  const d = (await api).darshil();

  console.log(await d);

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

export default StudentDashboard;
