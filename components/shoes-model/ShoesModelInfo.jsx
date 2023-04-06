import { Box, Button, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { SecondaryHeading } from "../StyledTypography";
import { PrimaryButton, SecondaryButton } from "../StyledButton";
import { NumberInput } from "../StyledTextField";
import styleColors from "@/styles/styleColors";
import { Add, Payment, Remove, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";

export default function ShoesModelInfo({ info }) {
  const [currentShoes, setCurrentShoes] = useState(info.shoeses[0]);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleColorChoice = (shoes) => {
    setCurrentShoes(shoes);
  };


  const handleDownQuantity = () => {
    if(currentQuantity <= 1){return;};
    setCurrentQuantity(currentQuantity - 1);
  }

  
  const handleUpQuantity = () => {
    if(currentQuantity >= 10 || currentQuantity >= currentShoes.quantity){return;}
    setCurrentQuantity(currentQuantity + 1);
  }
  return (
    <Stack p={2} gap={3}>
      <Typography variant="h5">{info.shoelModelName}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Typography>Thương hiệu:</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight="600" color={styleColors.black}>
              {info.brandName.toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Typography>Đơn giá:</Typography>
          </Grid>
          <Grid item>
            <SecondaryHeading>{currentShoes.unitPrice}đ</SecondaryHeading>
          </Grid>
        </Grid>
        <Grid item xs={12} container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Typography>Màu sắc:</Typography>
          </Grid>
          {info.shoeses.map((shoes) => (
            <Grid item xs={2}>
              {currentShoes.shoesID === shoes.shoesID ? (
                <PrimaryButton
                  fullWidth
                  key={shoes.shoesID}
                  disabled={shoes.size !== currentShoes.size}
                  onClick={() => handleColorChoice(shoes)}
                >
                  {shoes.color}
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  fullWidth
                  key={shoes.shoesID}
                  disabled={shoes.size !== currentShoes.size}
                  onClick={() => handleColorChoice(shoes)}
                >
                  {shoes.color}
                </SecondaryButton>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Typography>Kích thước:</Typography>
          </Grid>
          {info.shoeses.map((shoes) => (
            <Grid item xs={2}>
              {currentShoes.shoesID === shoes.shoesID ? (
                <PrimaryButton
                  fullWidth
                  key={shoes.shoesID}
                  disabled={shoes.color !== currentShoes.color}
                  onClick={() => handleColorChoice(shoes.shoesID)}
                >
                  {shoes.size}
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  fullWidth
                  key={shoes.shoesID}
                  disabled={shoes.color !== currentShoes.color}
                  onClick={() => handleColorChoice(shoes.shoesID)}
                >
                  {shoes.size}
                </SecondaryButton>
              )}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} container alignItems="center" spacing={3}>
          <Grid item xs={3}>
            <Typography>Số lượng: </Typography>
          </Grid>
          <Grid item xs={4}>
            <NumberInput
              type="number"
              value={currentQuantity}
              inputProps={{ style: { textAlign: "center" } }}
              InputProps={{
                startAdornment: (
                  <IconButton onClick={handleDownQuantity}>
                    <Remove />
                  </IconButton>
                ),
                endAdornment: (
                  <IconButton onClick={handleUpQuantity}>
                    <Add />
                  </IconButton>
                ),
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography>Kho: {currentShoes.quantity}</Typography>
          </Grid>
        </Grid>
        <Grid item container alignItems="center" spacing={3}>
          <Grid item>
            <SecondaryButton size="large" startIcon={<ShoppingCart />}>
              Thêm Vào Giỏ Hàng
            </SecondaryButton>
          </Grid>
          <Grid item>
            <PrimaryButton size="large" startIcon={<Payment />}>
              Mua Ngay
            </PrimaryButton>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}
