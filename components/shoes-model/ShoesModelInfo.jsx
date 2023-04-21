import { Box, Button, Grid, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { SecondaryHeading, ThirdHeading } from "../StyledTypography";
import { PrimaryButton, SecondaryButton, SelectButton } from "../StyledButton";
import { NumberInput } from "../StyledTextField";
import styleColors from "@/styles/styleColors";
import { Add, Payment, Remove, ShoppingCart } from "@mui/icons-material";
import { useEffect, useState } from "react";
import cartAPI from "@/api/cartAPI";
import { useDispatch } from "react-redux";
import { showErrorMessage, showMessage } from "@/redux/messageReducer";
import { useRouter } from "next/router";
import convertUtil from "@/utils/convertUtil";

export default function ShoesModelInfo({ info }) {
  const [currentShoes, setCurrentShoes] = useState(
    info.shoeses.reduce((prev, curr) => (prev.unitPrice < curr.unitPrice ? prev : curr))
  );
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [color, setColor] = useState(currentShoes ? currentShoes.color : null);
  const [size, setSize] = useState(currentShoes ? currentShoes.size : null);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleDownQuantity = () => {
    if (currentQuantity <= 1) {
      return;
    }
    setCurrentQuantity(currentQuantity - 1);
  };

  const handleUpQuantity = () => {
    if (currentQuantity >= 10 || currentQuantity >= currentShoes.quantity) {
      return;
    }
    setCurrentQuantity(currentQuantity + 1);
  };

  // find shoes
  useEffect(() => {
    const shoes = info.shoeses.find((shoes) => shoes.color == color && shoes.size == size);
    setCurrentShoes(shoes);
  }, [color, size]);

  // add shoes to cart
  const handleAddToCart = async () => {
    // call api to add item to cart
    console.log(currentShoes.shoesID, currentQuantity);
    const res = await cartAPI.addShoesToCart(currentShoes.shoesID, currentQuantity);

    // handle error res
    if (!res.success) {
      return;
    }

    // handle success res
    dispatch(showMessage("Đã thêm vào giỏ hàng"));
  };

  // go to checkout page
  const handleOrderNow =  async () => {
    // add item to cart before checkout
    const shoesID = currentShoes.shoesID;
    const res = await cartAPI.addShoesToCart(shoesID, currentQuantity);

    // handle error res
    if(!res.success){
      dispatch(showErrorMessage("Có lỗi xảy ra, hãy thử lại!"));
      return;
    }

    // handle success res
    const url = `/checkout?ShoesID=${shoesID}`;
    router.push(url);
  }

  return (
    info && (
      <Stack p={2} gap={3}>
        <Typography variant="h5">{info.shoelModelName}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} container alignItems="center" spacing={3}>
            <Grid item xs={5} sm={3}>
              <Typography>Thương hiệu:</Typography>
            </Grid>
            <Grid item>
              <ThirdHeading color={styleColors.gray.dark}>
                {info.brand?.brandName.toUpperCase()}
              </ThirdHeading>
            </Grid>
          </Grid>
          <Grid item xs={12} container alignItems="center" spacing={3}>
            <Grid item xs={5} sm={3}>
              <Typography>Đơn giá:</Typography>
            </Grid>
            <Grid item>
              <ThirdHeading color={styleColors.secondary}>
                {currentShoes == null ? "Không có hàng" : convertUtil.toPriceString(currentShoes.unitPrice)}
              </ThirdHeading>
            </Grid>
          </Grid>
          <Grid item xs={12} container alignItems="center" spacing={3}>
            <Grid item xs={12} sm={3}>
              <Typography>Màu sắc:</Typography>
            </Grid>
            {info.shoeses.map((shoes) => (
              <Grid item xs={4} sm={2} key={shoes.shoesID}>
                <SelectButton fullWidth onClick={(e) => setColor(shoes.color)} selected={color == shoes.color}>
                  {shoes.color}
                </SelectButton>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} container alignItems="center" spacing={3}>
            <Grid item xs={12} sm={3}>
              <Typography>Kích thước:</Typography>
            </Grid>
            {info.shoeses.map((shoes) => (
              <Grid item xs={4} sm={2} key={shoes.shoesID}>
                <SelectButton fullWidth onClick={(e) => setSize(shoes.size)} selected={shoes.size == size}>
                  {shoes.size}
                </SelectButton>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} container alignItems="center" spacing={3}>
            <Grid item xs={12} sm={3}>
              <Typography>Số lượng: </Typography>
            </Grid>
            <Grid item xs={8} sm={4}>
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
            <Grid item xs={4} sm={3}>
              <Typography>Kho: {currentShoes == null ? 0 : currentShoes.quantity}</Typography>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" spacing={3}>
            <Grid item>
              <SecondaryButton
                startIcon={<ShoppingCart sx={{color: styleColors.secondary}}/>}
                sx={{ paddingY: "10px" }}
                disabled={!currentShoes}
                onClick={handleAddToCart}
              >
                Thêm Vào Giỏ Hàng
              </SecondaryButton>
            </Grid>
            <Grid item>
              <PrimaryButton
                startIcon={<Payment sx={{color: styleColors.blue}}/>}
                sx={{ paddingY: "10px" }}
                disabled={!currentShoes}
                onClick={handleOrderNow}
              >
                Mua Ngay
              </PrimaryButton>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    )
  );
}
