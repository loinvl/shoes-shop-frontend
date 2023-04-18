import { Box, IconButton, Stack, Typography } from "@mui/material";
import CustomLink from "./CustomLink";
import styleColors from "@/styles/styleColors";
import { AddBusiness, BarChart, Delete, PeopleAlt, Receipt } from "@mui/icons-material";
import { useRouter } from "next/router";

export default function AdminNav({ tab, handleChooseTab }) {
  const router = useRouter();
  const nav = [
    {
      name: "Đơn Hàng",
      icon: <Receipt sx={{ color: styleColors.white }} />,
      href: "/admin",
    },
    {
      name: "Sản Phẩm",
      icon: <AddBusiness sx={{ color: styleColors.white }} />,
      href: "/admin/shoes-model-management",
    },
    {
      name: "Khách Hàng",
      icon: <PeopleAlt sx={{ color: styleColors.white }} />,
      href: "/admin/customer-management",
    },
    {
      name: "Thống Kê",
      icon: <BarChart sx={{ color: styleColors.white }} />,
      href: "/admin/statistic",
    },
  ];

  const handleClick = (index) => {
    handleChooseTab(index);
    router.push(nav[index].href);
  };

  return (
    <Stack sx={{ width: "100%", height: "100%", backgroundColor: styleColors.oilBlack }}>
      {nav.map((item, index) => (
        <Box key={index}>
          <IconButton sx={{ width: "100%" }} onClick={(e) => handleClick(index)}>
            <Stack
              direction="row"
              alignItems="center"
              width="100%"
              py={2}
              pl={3}
              spacing={1}
              backgroundColor={tab == index ? styleColors.metalGray : ""}
              sx={{ borderRadius: "0.2em", ":hover": { backgroundColor: styleColors.metalGray } }}
            >
              {item.icon}
              <Typography color={styleColors.white}>{item.name}</Typography>
            </Stack>
          </IconButton>
        </Box>
      ))}
    </Stack>
  );
}
