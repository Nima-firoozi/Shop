"use client";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
export default function ShopPage({ cat }) {
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

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        width: "100%",
        height: "auto",
        justifyContent: "center",
        padding: "7%",
      }}>
      {data &&
        data.map((item) => {
          return (
            <Product
              key={item.name + item.id}
              home={false}
              data={item}
              widthU={"250px"}
              heightU={"100%"}
            />
          );
        })}
    </Box>
  );
}
