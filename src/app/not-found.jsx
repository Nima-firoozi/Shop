"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function notfound() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      <Typography
        sx={{
          width: "100%",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
        }}>
        صفحه مورد نظر یافت نشد.
      </Typography>
      <Box
        sx={{
          fontSize: 20,
          color: "red",
          position: "relative",
          width: "300px",
          height: "300px",
        }}>
        <Image
          alt="404"
          src="/404.png"
          layout="fill"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}></Image>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Button
          sx={{
            borderRadius: "10px",
            border: "5px",
            backgroundColor: "black",
            border: "2px solid white",
          }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
            }}>
            صفحه اصلی
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
