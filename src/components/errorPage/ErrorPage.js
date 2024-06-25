import { toast } from "react-toastify";

export default function showError(errorCode,res) {
  let errorMessage;

  switch (errorCode) {
    case "notSelectSize":
      toast.error("Select Size");
      break;
    case "500":
      toast.error("unable to place order");
      break;
    case "storeLength":
      toast.error("Please Add Product");
      break;
    case "serverError":
      toast.error(res.response?.data || "Unable to connect to server");
      break;
    default:
      errorMessage = "An unknown error occurred";
  }

  // if (errorMessage) {
  //   toast.error(errorMessage);
  // }

  return null; // This component doesn't render anything
}
