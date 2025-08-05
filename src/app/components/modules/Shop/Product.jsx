"use client";
import { Box, Typography, IconButton, Snackbar, Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import useStore from "@/app/Store/Store";
export default function product({ data, home, widthU, heightU }) {
  let styleBox;
  let styleflexW;
  let styleHW;
  let styleHWIMG;
  const addPro = useStore((state) => state.addPro);
  const [massage, setMassage] = useState("");
  const [sev, setSev] = useState("");
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  function addHandle(data) {
    if (!data.n) {
      setMassage("محصول موجود نیست");
      setSev("error");
      handleOpen();
      return;
    }
    const temp = addPro(data);
    if (temp) {
      setMassage("محصول به سبد خرید اضافه شد");
      setSev("success");
    } else {
      setMassage("محصول از قبل در سبد خرید موجود است");
      setSev("error");
    }
    handleOpen();
  }
  if (home) {
    styleBox = {
      width: widthU,
      height: heightU,
    };
    styleHW = {
      width: "100%",
      height: "auto",
    };
    styleflexW = {
      flexDirection: "column",
    };
    styleHWIMG = {
      width: "100%",
      height: "auto",
    };
  } else {
    styleBox = {
      width: {
        xs: "100%",
        sm: widthU,
      },
      height: {
        xs: "auto",
        sm: heightU,
      },
    };
    styleflexW = {
      flexDirection: {
        sm: "column",
        xs: "row",
      },
    };
    styleHWIMG = {
      width: {
        xs: "23%",
        sm: "100%",
      },
      height: {
        xs: "100%",
        sm: "auto",
      },
    };
    styleHW = {
      width: {
        xs: "max-content",
        sm: "100%",
      },
      height: {
        xs: "100%",
        sm: "auto",
      },
    };
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={sev}
          variant="filled"
          sx={{ width: "100%" }}>
          {massage}
        </Alert>
      </Snackbar>
      <Box
        component="figcaption"
        sx={{
          ...styleBox,
          display: "flex",
          ...styleflexW,
          justifyContent: "space-between",
          border: "1px solid gray",
          borderRadius: "25px",
          overflow: "hidden",
          "&:hover": {
            border: "1px solid chocolate",
            "& .name": {
              color: "#009879",
            },
            "& .imgee": {
              opacity: "0 !important",
            },
          },
        }}>
        <Box
          component="figure"
          sx={{
            ...styleHWIMG,
            marginBottom: "15px",
          }}>
          <Link
            href={"/product/product-" + data.id}
            style={{
              height: "auto",
              width: "100%",
              position: "relative",
              display: "block",
            }}>
            <Image
              alt={data.name}
              src={"/co-" + data.img}
              height="1000000"
              width="100000"
              style={{
                height: "auto",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Image
              className="imgee"
              alt={data.name}
              src={"/" + data.img}
              height="1000000"
              width="100000"
              style={{
                objectFit: "cover",
                height: "auto",
                width: "100%",
                position: "absolute",
                top: "0",
                right: "0",
                opacity: "1",
                zIndex: "1000",
                transition: "400ms",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            ...styleHW,
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            justifyContent: "start",
          }}>
          <Typography
            sx={{
              width: "100%",
              color: "#575756",
              fontSize: "15px",
              marginBottom: "5px",
            }}>
            {data.util}
          </Typography>
          <Link
            style={{
              width: "100%",
              marginBottom: "30px",
              textDecoration: "none",
              color: "black",
            }}
            href={"/product/product-" + data.id}>
            <Typography
              className="name"
              sx={{
                width: "100%",
                fontSize: "20px",
                fontWeight: "bold",
                transition: "400ms",
              }}>
              {data.name}
            </Typography>
          </Link>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography
              sx={{ fontWeight: "bold", color: data.n > 0 ? "black" : "red" }}>
              {data.n > 0 ? data.price + "  تومان" : "موجود نیست"}
            </Typography>
            <IconButton
              onClick={() => {
                addHandle(data);
              }}
              sx={{ color: "#009879" }}>
              <AddCircleOutlineIcon
                sx={{ fontSize: "40px" }}></AddCircleOutlineIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
