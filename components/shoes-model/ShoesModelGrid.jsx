import { Grid } from "@mui/material";
import ShoelModelCard from "./ShoesModelCard";
import CustomLink from "../CustomLink";

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

export default function ShoesModelGrid() {
  return (
    <Grid container spacing={2}>
      {contents.map((content, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <CustomLink href="#">
            <ShoelModelCard width="100%" height="200px" content={content} />
          </CustomLink>
        </Grid>
      ))}
    </Grid>
  );
}
