import { toast, TypeOptions } from "react-toastify";

const toastNotify = (message, type = "success") => {
  toast(message, {
    type: type,
    position: toast.POSITION.TOP_RIGHT,
    theme: "dark",
  });
};

export default toastNotify;