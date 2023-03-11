import axios from "axios";

const changeStatusToSold = async (data) => {
  await axios.put(
    `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${data}/status?status=sold`
  );
};

export default changeStatusToSold;
