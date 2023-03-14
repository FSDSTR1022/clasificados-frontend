import axios from "axios";

const changeStatusToSold = async (data) => {
  await axios.put(
    `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${data}/status?status=sold`,
    null,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
};

export default changeStatusToSold;
