import axios from "axios";

const changeStatus = async (status, id) => {
  await axios.put(
    `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${id}/status?status=${status}`
  );
  window.location.reload();
};

export default changeStatus;
