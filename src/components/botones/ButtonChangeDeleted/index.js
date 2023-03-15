import React from "react";
import changeStatusToDeleted from "../functions/changeStatusToDeleted";

//import styles
import styles from "../../botones/buttonWithinSelect.module.css";

const ButtonChangeDeleted = ({ build, changeTgle }) => {
  const utility = async () => {
    await changeStatusToDeleted(`${build}`);
    changeTgle();
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
