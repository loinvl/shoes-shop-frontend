import styleColors from "@/styles/styleColors";
import { Close, Menu as MenuIcon, Receipt, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Avatar,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import CustomLink from "./CustomLink";
import { PrimaryButton, SecondaryButton } from "./StyledButton";
import { useDispatch, useSelector } from "react-redux";
import authAPI from "@/backendAPI/authAPI";
import authUtil from "@/utils/authUtil";
import { logoutSuccess } from "@/redux/userReducer";
import { useRouter } from "next/router";
import { FourthHeading, NormalHeading } from "./StyledTypography";
import StyledBadge from "./StyledBadge";
import { showErrorMessage } from "@/redux/messageReducer";

const nav = [
  {
    name: "Trang Chủ",
    href: "/",
  },
  {
    name: "Sản Phẩm",
    href: "/shoes-model",
  },
  {
    name: "Giới Thiệu",
    href: "/about",
  },
  {
    name: "Liên Hệ",
    href: "/contact",
  },
];

export default function Header() {
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
      dispatch(showErrorMessage("Lỗi khi đăng xuất, hãy thử lại."));
      return;
    }

    // handle success
    authUtil.removeToken();
    dispatch(logoutSuccess());

    // go to home page
    router.push("/");
  };

  return (
    <Box borderBottom={`2px solid ${styleColors.gray.medium}`} sx={{ backgroundColor: styleColors.white }}>
      <Container>
        <Box display={"flex"} justifyContent="space-between" py={1}>
          <Box>
            <CustomLink href="/">
              <img src="/brand/shoes-shop-logo.png" alt="logo" />
            </CustomLink>
          </Box>
          <Box display={"flex"} justifyContent="flex-end" alignItems={"center"} gap={{ xs: 2, sm: 5 }}>
            <Box>
              <CustomLink href="/cart">
                <StyledBadge badgeContent={1}>
                  <ShoppingCart color="action"/>
                </StyledBadge>
              </CustomLink>
            </Box>
            <Box>
              <CustomLink href="/purchase">
                <StyledBadge badgeContent={1}>
                  <Receipt color="action"/>
                </StyledBadge>
              </CustomLink>
            </Box>
            {user && (
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <IconButton onClick={handleOpenMenu}>
                  <Avatar src={user.AvatarLink} sx={{ width: "30px", height: "30px" }} />
                </IconButton>
              </Box>
            )}
            {!user && (
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <CustomLink href="/auth/register">
                  <Typography variant="h7" color={styleColors.gray.dark}>
                    Đăng ký
                  </Typography>
                </CustomLink>
              </Box>
            )}
            {!user && (
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <CustomLink href="/auth/login">
                  <PrimaryButton variant="contained">Đăng nhập</PrimaryButton>
                </CustomLink>
              </Box>
            )}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              {showMenuIcon ? (
                <IconButton onClick={handleOpenMenu}>
                  <MenuIcon color="action" sx={{color: styleColors.primary}}/>
                </IconButton>
              ) : (
                <IconButton onClick={handleCloseMenu}>
                  <Close color="action" sx={{color: styleColors.primary}}/>
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          display={{ xs: "none", sm: "flex" }}
          justifyContent="center"
          alignItems="center"
          gap={{ sm: 5, md: 10 }}
          backgroundColor={styleColors.primary}
        >
          {nav.map((item, index) => (
            <Box key={index}>
              <CustomLink href={item.href}>
                <Box p={1} sx={{ color: styleColors.white, ":hover": { color: styleColors.secondary } }}>
                  <NormalHeading color={"inherit"}>{item.name.toUpperCase()}</NormalHeading>
                </Box>
              </CustomLink>
            </Box>
          ))}
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
            {!user && (
              <Box>
                <MenuItem onClick={handleCloseMenu}>
                  <CustomLink href="/auth/login" style={{ width: "100%" }}>
                    <PrimaryButton variant="contained" fullWidth>
                      Đăng nhập
                    </PrimaryButton>
                  </CustomLink>
                </MenuItem>
                <MenuItem onClick={handleCloseMenu}>
                  <CustomLink href="/auth/register" style={{ width: "100%" }}>
                    <SecondaryButton variant="contained" fullWidth>
                      Đăng ký
                    </SecondaryButton>
                  </CustomLink>
                </MenuItem>
              </Box>
            )}
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
            <Divider />
            <Box display={{ xs: "block", sm: "none" }}>
              {nav.map((item, index) => (
                <MenuItem key={index} onClick={handleCloseMenu}>
                  <CustomLink href={item.href}>{item.name}</CustomLink>
                </MenuItem>
              ))}
            </Box>
          </Menu>
        </Box>
        <Box>{progressBar && <LinearProgress />}</Box>
      </Container>
    </Box>
  );
}
