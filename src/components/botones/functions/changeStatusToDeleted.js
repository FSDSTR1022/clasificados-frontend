import axios from "axios";

const changeStatusToDeleted = async (data) => {
  await axios.put(
    `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${data}/status?status=deleted`
  );
};

export default changeStatusToDeleted;
