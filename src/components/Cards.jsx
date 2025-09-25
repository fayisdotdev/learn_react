// import {cards} from "./styles/Cards.Module.css";
import styles from "./Cards.module.css";

export default function Card({ title, content }) {
  console.log({ title, content });
  return (
    <div className={styles.cards}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
