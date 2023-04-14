import { Grid } from "@mui/material";
import ShoelModelCard from "./ShoesModelCard";
import CustomLink from "../CustomLink";
// mock data
const contents = [
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
  {
    imageLink: "/image/shoes-sample1.webp",
    brandName: "Nike",
    shoesModelName: "Giày Nike gót nhùng, đế cao 4cm,da trắng mịn, full phụ kiện",
    minPrice: 1000000,
  },
];

export default function ShoesModelGrid({shoesModelList}) {
  return (
    <Grid container spacing={2}>
      {shoesModelList.map((shoesModel, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <CustomLink href={`/shoes-model/${shoesModel.shoesModelID}`}>
            <ShoelModelCard width="100%" shoesModel={shoesModel} />
          </CustomLink>
        </Grid>
      ))}
    </Grid>
  );
}
