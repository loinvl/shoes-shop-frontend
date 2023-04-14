import { Box } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginSuccess } from "@/redux/userReducer";
import authUtil from "@/utils/authUtil";
import MessageSnackBar from "../StyledSnackBar";

export default function DefaultLayout({ children }) {
  // auto login when token is not expire
  const dispatch = useDispatch();

  // control message global
  const message = useSelector((state) => state.message);

  useEffect(() => {
    (async () => {
      const accessToken = await authUtil.getValidAccessToken();
      if (accessToken) {
        const user = authUtil.getUserPayload(accessToken);
        dispatch(loginSuccess(user));
      }
    })();
  }, []);

  return (
    <>
      <Box height={{xs: "80px", sm: "120px"}}>
        <Box position="fixed" zIndex={100} width="100%">
          <Header />
        </Box>
      </Box>
      {children}
      <Footer />
      {message && <MessageSnackBar>{message}</MessageSnackBar>}
    </>
  );
}
