import { useSelector } from "react-redux";
import AdminFooter from "../AdminFooter";
import { Box } from "@mui/material";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import IsAdmin from "../hoc/IsAdmin";
import AutoLogin from "../hoc/AutoLogin";

export default function AdminLayout({ children }) {
  // control message global
  const message = useSelector((state) => state.message);

  return (
    <Box>
      <AutoLogin>
        <IsAdmin>
          <Box height="80px">
            <Box position="fixed" zIndex={100} width="100%">
              <AdminHeader />
            </Box>
          </Box>
          <Box display="flex">
            <Box height="100vh" flex={3}>
              <AdminNav />
            </Box>
            <Box flex={9}>{children}</Box>
          </Box>
          <AdminFooter />
          {message && <MessageSnackBar type={message.type}>{message.content}</MessageSnackBar>}
        </IsAdmin>
      </AutoLogin>
    </Box>
  );
}
