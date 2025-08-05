import React from "react";
import ShopPage from "@/app/components/modules/Shop/ShopPage";
import { Typography } from "@mui/material";
import Link from "next/link";
export default function page() {
  return (
    <>
      <Typography
        sx={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "10px",
          "&  *": {
            fontSize: "24px",
          },
        }}>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          {"خانه"}
        </Link>
        &gt;
        <Typography sx={{ fontSize: "24px" }} component="span">
          {"محصولات هورکا"}
        </Typography>
      </Typography>
      <ShopPage cat="hoo" />
    </>
  );
}
