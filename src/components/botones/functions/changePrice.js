import axios from "axios";

const changePrice = async (price, id) => {
  await axios.put(
    `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${id}/price?new_price=${price}`,
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    }
  );
  window.location.reload();
};

export default changePrice;
