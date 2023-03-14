import axios from "axios";

const addWishList = async (e, id) => {
  e.preventDefault();
  await axios.post(
    `${
      process.env.REACT_APP_LOCALHOST
    }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${id}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
};

export default addWishList;
