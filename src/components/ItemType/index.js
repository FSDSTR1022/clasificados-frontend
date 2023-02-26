import styles from "./itemtype.module.css";
import { useContext } from "react";
import { FiltersContext } from "../../Layout/MainPage/context/filters-context";

export function ItemType({ props }) {
  const { updateFilters } = useContext(FiltersContext);

  return (
    <section
      className={styles.content1}
      onClick={() => {
        updateFilters({ type: props.id });
      }}
    >
      <div className={styles.containerMain}>
        <aside className={styles.aside}>
          <div className={styles.boximage}>
            <img src={props.image} alt="i" className={styles.image} />
          </div>
          <div className={styles.anuncioInfo}>
            <a className={styles.link}>{props.name}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
