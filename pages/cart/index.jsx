import cartAPI from "@/api/cartAPI";
import CustomLink from "@/components/CustomLink";
import { PrimaryButton } from "@/components/StyledButton";
import { ConfirmDialog } from "@/components/StyledDialog";
import { NumberInput } from "@/components/StyledTextField";
import { StyledImage } from "@/components/layouts/StyledImage";
import { showMessage } from "@/redux/messageReducer";
import styleColors from "@/styles/styleColors";
import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, Checkbox, Container, Grid, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/*
// mock data
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
*/
export default function CartPage() {
  const [items, setItems] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedList, setSelectedList] = useState([]);
  const [selectedIndexList, setSelectedIndexList] = useState([]);
  const [openConfirmIndex, setOpenConfirmIndex] = useState(null);

  const dispatch = useDispatch();

  const router = useRouter();

  // handle choice item in cart to checkout;
  const handleSelectItem = (index) => {
    const newSelectedList = [...selectedList];
    newSelectedList[index] = !selectedList[index];

    // check selected all item
    const noneSelectedList = newSelectedList.filter((item) => !item);
    if (noneSelectedList.length == 0) {
      setSelectedAll(true);
    } else {
      setSelectedAll(false);
    }

    // add or remove from index list
    if (selectedList[index]) {
      const newSelectedIndexList = selectedIndexList.filter((i) => i != index);
      setSelectedIndexList(newSelectedIndexList);
    } else {
      const newSelectedIndexList = [...selectedIndexList, index];
      setSelectedIndexList(newSelectedIndexList);
    }

    setSelectedList(newSelectedList);
  };

  const handleSelectAllItem = () => {
    setSelectedAll(!selectedAll);

    // enable or disable all children checkbox
    const newSelectedList = Array(items.length).fill(!selectedAll);
    setSelectedList(newSelectedList);

    // add or remove from index list
    if(selectedAll){
      setSelectedIndexList([]);
    }
    else{
      setSelectedIndexList(Array.from(Array(items.length).keys()));
    }
  };

  useEffect(() => {
    (async () => {
      // get shoeses in cart
      const res = await cartAPI.getCart();

      // handle error res
      if (!res.success) {
        return;
      }

      // handle success res
      const items = res.data.cartDetailList;
      setItems(items);
      setSelectedList(Array(items.length).fill(false));
    })();
  }, []);

  // handle remove item in cart
  const handleRemoveItem = async (index) => {
    const shoesID = items[index].shoes.shoesID;
    const res = await cartAPI.removeShoesInCart(shoesID);

    // handle error res
    if (!res.success) {
      dispatch(showMessage("Xóa thất bại, hãy thử lại"));
      return;
    }

    // handle success res
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    setOpenConfirmIndex(null);
    dispatch(showMessage("Đã xóa"));
  };

  // handle down and up quantity
  const handleDownQuantity = async (index) => {
    if (items[index].quantity > 1) {
      // call api to update quantity
      const newQuantity = items[index].quantity - 1;
      const res = await cartAPI.updateQuantity(items[index].shoes.shoesID, newQuantity);

      // handle error res
      if (!res.success) {
        dispatch(showMessage("Giảm số lượng thất bại"));
        return;
      }

      // handle success res
      const newItems = [...items];
      newItems[index].quantity = newQuantity;
      setItems(newItems);
    }
  };

  const handleUpQuantity = async (index) => {
    if (items[index].quantity < 10) {
      // call api to update quantity
      const newQuantity = items[index].quantity + 1;
      const res = await cartAPI.updateQuantity(items[index].shoes.shoesID, newQuantity);

      // handle error res
      if (!res.success) {
        dispatch(showMessage("Tăng số lượng thất bại"));
        return;
      }

      // handle success res
      const newItems = [...items];
      newItems[index].quantity = newQuantity;
      setItems(newItems);
    }
  };

  // handle click order button
  const handleOrder = () => {
    // create url to redirect to new url
    const query = selectedIndexList.map(index => `ShoesID=${items[index].shoes.shoesID}`).join('&');
    const url = `/checkout?${query}`;
    
    // redirect to checkout with some shoes was selected
    router.push(url);
  };

  return (
    <Container>
      <Box textAlign="center" mb={10}>
        <Box>
          <Typography variant="h4" fontWeight="600">
            GIỎ HÀNG
          </Typography>
        </Box>
        <Grid container columns={19} px={1} alignItems="center" spacing={{ xs: 1, md: 0 }}>
          <Grid item xs={2} md={1}>
            <Checkbox
              checked={selectedAll}
              onChange={() => handleSelectAllItem()}
              inputProps={{ "aria-label": "controlled" }}
            />
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
          {items.length === 0 ? (
            <Grid item xs={12} justifyContent="center">
              <Typography>Trống. Hãy tích cực chọn lựa!</Typography>
            </Grid>
          ) : (
            items.map((item, index) => (
              <Grid key={index} item xs={12}>
                <Grid
                  container
                  columns={19}
                  py={3}
                  px={1}
                  spacing={{ xs: 1, md: 0 }}
                  alignItems="center"
                  sx={{ border: `1px solid ${styleColors.cloudyGray}` }}
                >
                  <Grid item xs={2} md={1}>
                    <Checkbox
                      checked={selectedList[index]}
                      onChange={() => handleSelectItem(index)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </Grid>
                  <Grid item xs={17} md={7} display="flex" alignItems="center" gap={1}>
                    <StyledImage src={item.shoesModel.images[0].imageLink} alt="shoes" width="100px" height="100px" />
                    <Typography textAlign="justify">{item.shoesModel.shoesModelName}</Typography>
                  </Grid>
                  <Grid item xs={19} md={4}>
                    <Grid container columns={4}>
                      <Grid item xs={2} display="flex" justifyContent={{ md: "center" }}>
                        <Typography display={{ md: "none" }}>Màu sắc:&nbsp;</Typography>
                        <Typography>{item.shoes.color}</Typography>
                      </Grid>
                      <Grid item xs={2} display="flex" justifyContent={{ md: "center" }}>
                        <Typography display={{ md: "none" }}>Kích thước:&nbsp;</Typography>
                        <Typography>{item.shoes.size}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={19} md={4}>
                    <Grid container columns={4} alignItems="center">
                      <Grid item xs={2} display="flex" justifyContent={{ md: "center" }}>
                        <Typography display={{ md: "none" }}>Đơn giá:&nbsp;</Typography>
                        <Typography>{item.shoes.unitPrice}</Typography>
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
                              <IconButton onClick={(e) => handleDownQuantity(index)}>
                                <Remove />
                              </IconButton>
                            ),
                            endAdornment: (
                              <IconButton onClick={(e) => handleUpQuantity(index)}>
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
                        <Typography>{item.shoes.unitPrice * item.quantity}</Typography>
                      </Grid>
                      <Grid item xs={1.5} md={1} display="flex" alignItems="center" justifyContent={{ md: "center" }}>
                        <Typography display={{ md: "none" }}>Xóa:&nbsp;</Typography>
                        <ConfirmDialog
                          open={openConfirmIndex == index}
                          openButton={
                            <IconButton onClick={(e) => setOpenConfirmIndex(index)}>
                              <Delete />
                            </IconButton>
                          }
                          title="Xóa Giày"
                          content="Bạn muốn xóa đôi giày này khỏi giỏ hàng?"
                          cancleLabel="Hủy"
                          onCancle={(e) => setOpenConfirmIndex(null)}
                          okLabel="Đồng ý"
                          onOk={(e) => handleRemoveItem(index)}
                        ></ConfirmDialog>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))
          )}
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
            <Typography display="inline">{items.length} sản phẩm</Typography>
            <Typography>):&nbsp;</Typography>
            <Typography variant="h6" fontWeight="600">
              {items.reduce((pre, cur) => pre + cur.shoes.unitPrice * cur.quantity, 0)}đ
            </Typography>
          </Box>
          <PrimaryButton size="large" onClick={handleOrder} disabled={selectedIndexList.length === 0}>
            Mua Hàng
          </PrimaryButton>
        </Box>
      </Box>
    </Container>
  );
}
