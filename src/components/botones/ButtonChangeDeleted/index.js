import React from "react";
import changeStatusToDeleted from "../functions/changeStatusToDeleted";

//import styles
import styles from "../../botones/buttonWithinSelect.module.css";

const ButtonChangeDeleted = ({ build }) => {
  const utility = () => {
    changeStatusToDeleted(`${build}`);
    //hacer cambios en un useState en el meno principal
    window.location.reload();
  };

  return (
    <div>
      <button className={styles.boton} onClick={utility}>
        Borrar
      </button>
    </div>
  );
};

export default ButtonChangeDeleted;
