import styleColors from "@/styles/styleColors";
import { Close, Menu as MenuIcon} from "@mui/icons-material";
import {
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import CustomLink from "./CustomLink";
import { PrimaryButton, SecondaryButton } from "./StyledButton";
import { useDispatch, useSelector } from "react-redux";
import authAPI from "@/api/authAPI";
import authUtil from "@/utils/authUtil";
import { logoutSuccess } from "@/redux/userReducer";
import { useRouter } from "next/router";

export default function AdminHeader() {
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const openNav = Boolean(anchorEl);

  // redux
  const user = useSelector((state) => state.user);
  const progressBar = useSelector((state) => state.progressBar);
  const dispatch = useDispatch();

  // router
  const router = useRouter();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setShowMenuIcon(false);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setShowMenuIcon(true);
  };

  // handle logout
  const handleLogout = async () => {
    // call api to logout on server
    const res = await authAPI.logout();

    // handle error res
    if (!res.success) {
      return;
    }

    // handle success
    authUtil.removeToken();
    dispatch(logoutSuccess());

    // go to home page
    router.push("/admin/auth/admin-login");
  };

  return (
    <Box borderBottom={`2px solid ${styleColors.cloudyGray}`} sx={{ backgroundColor: styleColors.white }}>
      <Container>
        <Box display={"flex"} justifyContent="space-between" py={1}>
          <Box>
            <CustomLink href="/admin">
              <img src="/brand/shoes-shop-logo.png" alt="logo" />
            </CustomLink>
          </Box>
          <Box display={"flex"} justifyContent="flex-end" alignItems={"center"} gap={{ xs: 2, sm: 5 }}>
            {user && (
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <IconButton onClick={handleOpenMenu}>
                  <Avatar src={user.AvatarLink} sx={{ width: "30px", height: "30px" }} />
                </IconButton>
              </Box>
            )}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              {showMenuIcon ? (
                <IconButton onClick={handleOpenMenu}>
                  <MenuIcon color="action" />
                </IconButton>
              ) : (
                <IconButton onClick={handleCloseMenu}>
                  <Close color="action" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>

        <Box>
          <Menu
            anchorEl={anchorEl}
            open={openNav}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {user && (
              <Box>
                <MenuItem onClick={handleCloseMenu}>
                  <CustomLink href="/user" style={{ width: "100%" }}>
                    <PrimaryButton variant="contained" fullWidth>
                      Thông Tin Cá Nhân
                    </PrimaryButton>
                  </CustomLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <CustomLink href="/" style={{ width: "100%" }}>
                    <SecondaryButton variant="contained" fullWidth onClick={handleLogout}>
                      Đăng Xuất
                    </SecondaryButton>
                  </CustomLink>
                </MenuItem>
              </Box>
            )}
          </Menu>
        </Box>
        <Box>{progressBar && <LinearProgress />}</Box>
      </Container>
    </Box>
  );
}
