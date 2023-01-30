import styles from "./module.itemtype.css";
import { useContext } from "react";
import { FiltersContext } from "../../Layout/MainPage/context/filters-context";

export function ItemType({ props }) {
  const { updateFilters } = useContext(FiltersContext);

  return (
    <section
      className="content1"
      onClick={() => {
        updateFilters({ type: props.id });
      }}
    >
      <aside id="aside">
        <div className="boximage">
          <img src={props.image} alt="" className="image" />
        </div>
        <div className="anuncio-info">
          <a id="link">{props.name}</a>
        </div>
      </aside>
    </section>
  );
}
