import  { jwtDecode } from "jwt-decode";
import { SD_Roles } from "../Utility/StaticDetail";

const withAdmin = (WrappedComponent) => {
  return (props) => {
    const accessToken = localStorage.getItem("token") ?? "";
    if (accessToken) {
      const decode = jwtDecode(accessToken);
      if (decode.role !== SD_Roles.ADMIN) {
        window.location.replace("/accessDenied");
        return null;
      }
    } else {
      window.location.replace("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdmin;
