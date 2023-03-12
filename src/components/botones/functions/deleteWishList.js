import axios from "axios";

const deleteWishList = async (data) => {
  await axios.delete(
    `${
      process.env.REACT_APP_LOCALHOST
    }/clasificados/user/${localStorage.getItem(
      "userId"
    )}/wish-list/item/${data}`
  );
  // window.location.reload();
};

export default deleteWishList;
