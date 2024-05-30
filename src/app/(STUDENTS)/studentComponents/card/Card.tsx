import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "../../../../css/card.module.css";

interface CardProps {
  title: string;
  number: number;
}

const Card = ({ item }: { item: CardProps }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
      </div>
    </div>
  );
};

export default Card;
