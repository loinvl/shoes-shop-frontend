import styleColors from "@/styles/styleColors";
import { Close, Menu as MenuIcon, Receipt, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Container, Typography, Menu, MenuItem, IconButton, Divider } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import CustomLink from "./CustomLink";
import { PrimaryButton, SecondaryButton } from "./StyledButton";

export default function Header() {
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const openNav = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setShowMenuIcon(false);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setShowMenuIcon(true);
  };

  return (
    <Box borderBottom={`2px solid ${styleColors.cloudyGray}`}>
      <Container>
        <Box display={"flex"} justifyContent="space-between" py={1}>
          <Box>
            <CustomLink href="/">
              <img src="/brand/shoes-shop-logo.png" alt="logo" />
            </CustomLink>
          </Box>
          <Box display={"flex"} justifyContent="flex-end" alignItems={"center"} gap={{ xs: 2, sm: 5 }}>
            <Box>
              <Link href="/cart">
                <Badge badgeContent={1} color="error">
                  <ShoppingCart color="action" />
                </Badge>
              </Link>
            </Box>
            <Box>
              <Link href="/purchase">
                <Badge badgeContent={1} color="error">
                  <Receipt color="action" />
                </Badge>
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <CustomLink href="/auth/register">
                <Typography variant="h7" color={styleColors.metalGray}>
                  Đăng ký
                </Typography>
              </CustomLink>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <CustomLink href="/auth/login">
                <PrimaryButton variant="contained">Đăng nhập</PrimaryButton>
              </CustomLink>
            </Box>
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
        <Box
          display={{ xs: "none", sm: "flex" }}
          justifyContent="center"
          alignItems="center"
          gap={10}
          backgroundColor={styleColors.blue}
          p={1}
        >
          <Box>
            <CustomLink href="/">
              <Typography variant="h7" color={styleColors.white}>
                TRANG CHỦ
              </Typography>
            </CustomLink>
          </Box>
          <Box>
            <CustomLink href="/shoes-model">
              <Typography variant="h7" color={styleColors.white}>
                SẢN PHẨM
              </Typography>
            </CustomLink>
          </Box>
          <Box>
            <CustomLink href="/about">
              <Typography variant="h7" color={styleColors.white}>
                GIỚI THIỆU
              </Typography>
            </CustomLink>
          </Box>
          <Box>
            <CustomLink href="/contact">
              <Typography variant="h7" color={styleColors.white}>
                LIÊN HỆ
              </Typography>
            </CustomLink>
          </Box>
        </Box>
        <Box>
          <Menu
            anchorEl={anchorEl}
            open={openNav}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
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
            <Divider />
            <MenuItem onClick={handleCloseMenu}>
              <CustomLink href="/">Trang chủ</CustomLink>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <CustomLink href="/shoes-model">Sản phẩm</CustomLink>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <CustomLink href="/about">Giới thiệu</CustomLink>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <CustomLink href="/contact">Liên hệ</CustomLink>
            </MenuItem>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}
