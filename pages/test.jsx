import shoesModelAPI from "@/api/shoesModelAPI";
import { useEffect, useState } from "react";

export default function Test() {
  useEffect(() => {
    (async function fetchShoesModelByID() {
      const params = {
        PageIndex: 1,
        ItemPerPage: 10
      }
      
      const res = await shoesModelAPI.getShoesModelList(params);
      console.log(res);
    })();
  }, []);
  return <div>test</div>;
}
