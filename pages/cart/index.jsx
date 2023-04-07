import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { NumberInput } from "@/components/StyledTextField";
import { StyledImage } from "@/components/layouts/StyledImage";
import styleColors from "@/styles/styleColors";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, Checkbox, Container, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function CartPage() {
  const items = [
    {
      imageLink: "/image/shoes-sample1.webp",
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      color: "Xanh",
      size: 38,
      unitPrice: 1000000,
      quantity: 5,
      brandName: "Nike",
    },

    {
      imageLink: "/image/shoes-sample1.webp",
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      color: "Xanh",
      size: 38,
      unitPrice: 1000000,
      quantity: 5,
      brandName: "Nike",
    },

    {
      imageLink: "/image/shoes-sample1.webp",
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      color: "Xanh",
      size: 38,
      unitPrice: 1000000,
      quantity: 5,
      brandName: "Nike",
    },

    {
      imageLink: "/image/shoes-sample1.webp",
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      color: "Xanh",
      size: 38,
      unitPrice: 1000000,
      quantity: 5,
      brandName: "Nike",
    },

    {
      imageLink: "/image/shoes-sample1.webp",
      shoesModelName:
        "Giày Nike_air force 1 low to bigbang, af1 dây thừng, chất liệu vải thổ cẩm, giày nam nữ cổ thấp, đế air tăng chiều cao",
      color: "Xanh",
      size: 38,
      unitPrice: 1000000,
      quantity: 5,
      brandName: "Nike",
    },
  ];

  const [checked, setChecked] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const handleChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Container>
      <Box textAlign="center" my={5}>
        <Box>
          <Typography variant="h4" fontWeight="600">
            GIỎ HÀNG
          </Typography>
        </Box>
        <Grid container columns={19} my={3} px={1} alignItems="center">
          <Grid item xs={2} md={1}>
            <Checkbox checked={true} onChange={() => handleChange(index)} inputProps={{ "aria-label": "controlled" }} />
          </Grid>
          <Grid item xs={17} md={7}>
            <Typography fontWeight="600">SẢN PHẨM</Typography>
          </Grid>
          <Grid item md={11} display={{ xs: "none", md: "flex" }}>
            <Grid container columns={11} alignItems="center">
              <Grid item xs={2}>
                <Typography fontWeight="600">MÀU SẮC</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight="600">KÍCH THƯỚC</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight="600">ĐƠN GIÁ</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight="600">SỐ LƯỢNG</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight="600">THÀNH TIỀN</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography fontWeight="600">XÓA</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mt={3}>
          {items.map((item, index) => (
            <Grid
              key={index}
              item
              container
              columns={19}
              py={3}
              px={1}
              spacing={{ xs: 2, md: 0 }}
              alignItems="center"
              sx={{ border: `1px solid ${styleColors.cloudyGray}` }}
            >
              <Grid item xs={2} md={1}>
                <Checkbox
                  checked={index === selectedIndex}
                  onChange={() => handleChange(index)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Grid>
              <Grid item xs={17} md={7} display="flex" alignItems="center" gap={1}>
                <StyledImage src={item.imageLink} alt="shoes" width="100px" height="100px" />
                <Typography textAlign="justify">{item.shoesModelName}</Typography>
              </Grid>
              <Grid item xs={19} md={4}>
                <Grid container columns={4}>
                  <Grid item xs={2} display="flex" justifyContent={{ md: "center" }}>
                    <Typography display={{ md: "none" }}>Màu sắc:&nbsp;</Typography>
                    <Typography>{item.color}</Typography>
                  </Grid>
                  <Grid item xs={2} display="flex" justifyContent={{ md: "center" }}>
                    <Typography display={{ md: "none" }}>Kích thước:&nbsp;</Typography>
                    <Typography>{item.size}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={19} md={4}>
                <Grid container columns={4} alignItems="center">
                  <Grid item xs={2} display="flex" justifyContent={{ md: "center" }}>
                    <Typography display={{ md: "none" }}>Đơn giá:&nbsp;</Typography>
                    <Typography>{item.unitPrice}</Typography>
                  </Grid>
                  <Grid item md={2} display="flex" alignItems="center" justifyContent={{ md: "center" }}>
                    <Typography mr={2} display={{ md: "none" }}>
                      Số lượng:&nbsp;
                    </Typography>
                    <NumberInput
                      type="number"
                      value={item.quantity}
                      inputProps={{ style: { textAlign: "center" } }}
                      InputProps={{
                        startAdornment: (
                          <IconButton>
                            <Remove />
                          </IconButton>
                        ),
                        endAdornment: (
                          <IconButton>
                            <Add />
                          </IconButton>
                        ),
                        readOnly: true,
                        sx: { padding: 0 },
                      }}
                      sx={{ width: { xs: "90px", sm: "100px", md: "100%" } }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={19} md={3}>
                <Grid container columns={3} alignItems="center">
                  <Grid item xs={1.5} md={2} display="flex" justifyContent={{ md: "center" }}>
                    <Typography display={{ md: "none" }}>Thành tiền:&nbsp;</Typography>
                    <Typography>{item.unitPrice * item.quantity}</Typography>
                  </Grid>
                  <Grid item xs={1.5} md={1} display="flex" alignItems="center" justifyContent={{ md: "center" }}>
                    <Typography display={{ md: "none" }}>Xóa:&nbsp;</Typography>
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Box
          mt={5}
          p={3}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={3}
          sx={{ border: `1px solid ${styleColors.cloudyGray}`, backgroundColor: styleColors.cyanBlue }}
        >
          <Box display="flex" alignItems="center">
            <Typography>Tổng tiền(</Typography>
            <Typography display="inline">5 sản phẩm</Typography>
            <Typography>):&nbsp;</Typography>
            <Typography variant="h6" fontWeight="600">
              1000000đ
            </Typography>
          </Box>
          <CustomLink href="/checkout">
            <PrimaryButton size="large">Mua Hàng</PrimaryButton>
          </CustomLink>
        </Box>
      </Box>
    </Container>
  );
}
