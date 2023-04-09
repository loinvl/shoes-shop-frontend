import shoesModelAPI from "@/api/shoesModelAPI";
import ShoesModelGrid from "@/components/shoes-model-list/ShoesModelGrid";
import SideBar from "@/components/shoes-model-list/SideBar";
import TopBar from "@/components/shoes-model-list/TopBar";
import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function ShoesModelListPage() {
  const [shoesModelList, setShoesModelList] = useState([]);
  const [shoesModelCount, setShoesModelCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const itemPerPage = 12;
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [size, setSize] = useState(null);
  const [brandID, setBrandID] = useState(null);
  const [search, setSearch] = useState(null);
  const [sort, setSort] = useState(null);

  // handle choice from price
  const handleChangeSideBar = (from, to, size, brandID) => {
    setFrom(from);
    setTo(to);
    setSize(size);
    setBrandID(brandID);
  };

  const handleChangeTopBar = (search, sort) => {
    setSearch(search);
    setSort(sort);
  };

  // get shoes model list
  useEffect(() => {
    (async () => {
      const params = {
        PageIndex: pageIndex,
        ItemPerPage: itemPerPage,
        From: from,
        To: to,
        Size: size,
        BrandID: brandID,
        Search: search,
        Sort: sort,
      };
      const res = await shoesModelAPI.getShoesModelList(params);

      // handle res
      if (!res.success) {
        // handle error
        console.log("call api failure, handle later");
        return;
      }

      window.scrollTo({ top: 0 });
      console.log(res.data.shoesModelList);
      setShoesModelList(res.data.shoesModelList);
    })();
  }, [from, to, size, brandID, search, sort, pageIndex]);

  // run one time
  useEffect(() => {
    (async () => {
      const shoesModelCountRes = await shoesModelAPI.getShoesModelCount();

      // handle res
      if (!shoesModelCountRes.success) {
        // handle error
        return;
      }

      setShoesModelCount(shoesModelCountRes.data.shoesModelCount);
    })();
  }, []);

  return (
    <Container>
      <Box mt={{ sm: 3 }} mb={10} display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
        <Box flex={1}>
          <SideBar onChange={handleChangeSideBar} />
        </Box>
        <Box flex={3}>
          <Box>
            <TopBar onChange={handleChangeTopBar} />
          </Box>
          <Box mt={5}>
            {shoesModelList.length == 0 ? (
              <Stack alignItems="center">
                <Typography>Không tìm thấy sản phẩm nào!</Typography>
              </Stack>
            ) : (
              <ShoesModelGrid shoesModelList={shoesModelList} />
            )}
          </Box>
          <Stack mt={5} alignItems="center">
            <Pagination
              count={Math.floor(shoesModelCount / itemPerPage) + 1}
              variant="outlined"
              size="large"
              page={pageIndex}
              onChange={(e, value) => setPageIndex(value)}
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
