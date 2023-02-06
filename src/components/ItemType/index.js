import styles from "./module.itemtype.css";
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
      <aside id="aside">
        <div className={styles.boximage}>
          <img src={props.image} alt="" className={styles.image} />
        </div>
        <div className={styles.anuncioInfo}>
          <a id={styles.link}>{props.name}</a>
        </div>
      </aside>
    </section>
  );
}
