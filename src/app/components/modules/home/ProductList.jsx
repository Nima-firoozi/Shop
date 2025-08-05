"use client";
import { Box, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../Shop/Product";
import axios from "axios";

export default function ProductList({ t1, t2, cat }) {
  const [rightP, setRihtP] = useState(0);
  const [data, setData] = useState(null);
  async function getData() {
    axios
      .get("https://68875657071f195ca9804edb.mockapi.io/products?shop=" + cat)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  function rightHandle() {
    const temp = rightP + 10;
    temp <= 90 && setRihtP(temp);
  }
  function lefttHandle() {
    const temp = rightP - 10;
    temp >= 0 && setRihtP(temp);
  }
  return (
    <Box
      sx={{
        display: "flex",
        overflow: "hidden",
        alignContent: "center",
        height: "80vh",
        flexWrap: "wrap",
        width: "100%",
      }}>
      <Box
        sx={{
          width: "100%",
          flexDirection: "column",
          paddingRight: "10px",
          height: "10%",
          display: "flex",
          justifyContent: "start",
        }}>
        <Typography component="h4" sx={{ color: "#505049" }}>
          {t1}
        </Typography>
        <Typography
          component="h2"
          sx={{ fontWeight: "bold", fontSize: "26px" }}>
          {t2}
        </Typography>
      </Box>
      <Box
        sx={{
          transformOrigin: "right",
          transform: "translateX(" + rightP + "%)",
          paddingBlock: "3%",
          width: "max-content",
          height: "85%",
          display: "flex",
          gap: "15px",
          transition: "500ms",
        }}>
        {data &&
          data.map((item) => {
            console.log(item);

            return (
              <Product
                key={item.name + item.id}
                home={true}
                data={item}
                widthU={"250px"}
                heightU={"100%"}
              />
            );
          })}
      </Box>
      <Box
        sx={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "start",
          gap: "20px",
          height: "5%",
          width: "100%",
        }}>
        <IconButton onClick={rightHandle}>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </IconButton>
        <IconButton onClick={lefttHandle}>
          <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
        </IconButton>
      </Box>
    </Box>
  );
}
