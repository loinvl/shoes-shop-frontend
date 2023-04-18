import { useSelector } from "react-redux";
import AdminFooter from "../AdminFooter";
import { Box, Container } from "@mui/material";
import AdminHeader from "../AdminHeader";
import AdminNav from "../AdminNav";
import IsAdmin from "../hoc/IsAdmin";
import AutoLogin from "../hoc/AutoLogin";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [enableTab, setEnableTab] = useState(0);

  // control message global
  const message = useSelector((state) => state.message);

  // handle choose tab
  const handleChooseTab = (newTab) => {
    setEnableTab(newTab);
  }

  return (
    <Box>
      <AutoLogin>
        <IsAdmin>
          <Box height="65px">
            <Box position="fixed" zIndex={100} width="100%">
              <AdminHeader />
            </Box>
          </Box>
            <Box display="flex">
              <Box width="250px" minHeight="100vh"  position="relative">
                <Box position="fixed" zIndex={100} width="200px" height="100vh">
                  <AdminNav tab={enableTab} handleChooseTab={handleChooseTab}/>
                </Box>
              </Box>
              <Box width="100%" p={3}>
                {children}
              </Box>
            </Box>
          <AdminFooter />
          {message && <MessageSnackBar type={message.type}>{message.content}</MessageSnackBar>}
        </IsAdmin>
      </AutoLogin>
    </Box>
  );
}
