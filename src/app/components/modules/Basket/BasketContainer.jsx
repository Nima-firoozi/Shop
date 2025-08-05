"use client";
import useStore from "@/app/Store/Store";
import { Box, Typography } from "@mui/material";
import React from "react";
import Basketfac from "./Basketfac";
import Basketlist from "./Basketlist";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
export default function BasketContainer() {
  const data = useStore((state) => state.basket);

  return (
    <>
      <Typography
        component="h2"
        sx={{
          fontSize: "50px",
          fontWeight: "bold",
          textAlign: "center",
          paddingBlock: "10px",
        }}>
        سبد خرید
      </Typography>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          paddingBlock: "15px",
          paddingInline: "20px",
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          justifyContent: {
            xs: "start",
            lg: "space-between",
          },
          flexWrap: "wrap",
          "&  *": {
            height: "max-content",
          },
        }}>
        {data == 0 ? (
          <Box sx={{ marginInline: "auto", textAlign: "center" }}>
            <Typography>
              <ShoppingBagIcon
                sx={{
                  fontSize: {
                    xs: "80px",
                    sm: "185px",
                    lg: "270px",
                  },
                  color: "black",
                }}
              />
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "45px",
                  lg: "70px",
                },
                color: "black",
              }}>
              سبد خرید خالی است.
            </Typography>
          </Box>
        ) : (
          <>
            <Basketlist />
            <Basketfac />
          </>
        )}
      </Box>
    </>
  );
}
