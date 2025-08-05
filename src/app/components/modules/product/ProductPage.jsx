"use client";
import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import useStore from "@/app/Store/Store";
import { useState } from "react";

export default function ProductPage({ data }) {
  const [open, setOpen] = useState(false);
  const addPro = useStore((state) => state.addPro);
  const [massage, setMassage] = useState("");
  const [sev, setSev] = useState("");
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
      ;
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
        <Link
          href={data.shop == "kh" ? "/shopKh" : "shopHoo"}
          style={{ textDecoration: "none", color: "black", fontSize: "24px" }}>
          {data.shop == "kh" ? "محصولات خانگی" : "محصولات هورکا"}
        </Link>
        &gt;
        <Typography style={{ fontSize: "24px" }} component="span">
          {data.name}
        </Typography>
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "7%",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            overflow: "hidden",
            borderRadius: "18px",
            position: "relative",
            width: {
              lg: "450px",
              xs: "100%",
            },
            aspectRatio: "1/1",
            border: "3px solid #C19277",
          }}>
          <Image
            alt="bonmanoo"
            src={"/" + data.img}
            layout="fill"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "100%",
              lg: "max-content",
            },
          }}>
          <Typography
            sx={{
              fontSize: "28px",
              borderBottom: "2px solid rgba(0,0,0,.5)",
              paddingBlock: "13px",
            }}>
            {data.name}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0,0,0,.6)",
              fontSize: "21px",
              paddingBlock: "13px",
            }}>
            {data.shop == "kh"
              ? "دسته : محصولات خانگی"
              : "دسته : محصولات هورکا"}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "sticky",
            top: "120px",
            borderRadius: "10px",
            display: "flex",
            padding: "10px",
            flexDirection: "column",
            gap: "10px",
            width: {
              xs: "100%",
              lg: "200px",
            },
            border: "2px solid black",
            height: "max-content",
          }}>
          <Typography
            sx={{
              width: "100%",
              fontSize: "25px",
              color: data.n ? "black" : "red",
            }}>
            {data.n ? data.price + " تومان" : "موجود نیست"}
          </Typography>
          <Button
            sx={{
              width: "100%",
              paddingBlock: "8px",
              border: "1px solid black",
            }}
            variant="outlined">
            <Link
              href="/basket"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "22px",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {"مشاهده سبد خرید"}
            </Link>
          </Button>
          <Button
            onClick={() => {
              addHandle(data);
            }}
            sx={{
              width: "100%",
              paddingBlock: "8px",
              backgroundColor: "#009879",
              color: "white",
              fontSize: "20px",
            }}
            variant="contained">
            {"افزودن به سبد خرید"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
