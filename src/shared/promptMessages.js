import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function promptError(message) {
  toast.error(`${message}`, {
    position: "top-right",
    autoClose: 700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

export function promptSuccess(message) {
  toast.success(`${message}`, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
