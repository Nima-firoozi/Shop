import { Box } from "@mui/material";
import React from "react";
import ProductList from "./ProductList";
import Image from "next/image";

export default function Shoprowtwo() {
  return (
    <Box
      sx={{
        minHeight: "110vh",
        display: "flex",
        paddingRight: "10%",
        paddingBlock: "5%",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
      <Box
        sx={{
          position: "relative",
          width: "60%",
          aspectRatio: "9/9",
          display: {
            xs: "none",
            md: "block",
          },
        }}>
        <Image
          src="/banner2.jpg"
          alt="bonmanoo"
          layout="fill"
          objectFit="cover"
        />
      </Box>

      <ProductList t1="محصولات هورکا" t2="دانه قهوه ترکیبی" cat="hoo" />
    </Box>
  );
}
