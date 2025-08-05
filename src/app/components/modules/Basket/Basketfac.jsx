"use client";

import { Button, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStore from "@/app/Store/Store";
import Link from "next/link";
export default function BasketFac() {
  const data = useStore((state) => state.basket);
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  function sum() {
    let num = 0;
    let price = 0;
    data &&
      data.map((item) => {
        num += item.count;
        price += item.pricen * item.count;
      });
    setPrice(price);
    setCount(num);
  }
  useEffect(() => {
    sum();
  }, [data]);
  return (
    <List
      sx={{
        paddingInline: "0px",
        height: "max-content",
        width: {
          xs: "100%",
          lg: "30%",
        },
        border: "3px solid black",
        borderRadius: "15px",
      }}>
      <ListItem sx={{ width: "100%" }}>
        <Typography
          component="h3"
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
          }}>
          فاکتور
        </Typography>
      </ListItem>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "3px solid black",
        }}>
        <Typography sx={{ fontSize: "25px" }} component="span">
          تعداد کل :
        </Typography>
        <Typography sx={{ fontSize: "25px" }} component="span">
          {count}
        </Typography>
      </ListItem>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "3px solid black",
        }}>
        <Typography fontSize={{ fontSize: "25px" }} component="span">
          قیمت کل :
        </Typography>
        <Typography fontSize={{ fontSize: "25px" }} component="span">
          {price.toLocaleString() + " تومان"}
        </Typography>
      </ListItem>
      <ListItem>
        <Button
          variant="contained"
          sx={{
            borderBlockColor: "black",
            width: "100%",
            fontSize: "27px",
            fontWeight: "bold",
          }}>
          <Link
            style={{
              width: "100%",
              height: "100%",
              textDecoration: "none",
              color: "Window",
            }}
            href="/">
            برگشت به صفحه اصلی
          </Link>
        </Button>
      </ListItem>
      <ListItem>
        <Button
          variant="contained"
          sx={{
            borderBlockColor: "black",
            width: "100%",
            fontSize: "27px",
            fontWeight: "bold",
          }}>
          <Link
            style={{
              width: "100%",
              height: "100%",
              textDecoration: "none",
              color: "Window",
            }}
            href="/about">
            پرداخت
          </Link>
        </Button>
      </ListItem>
    </List>
  );
}
