import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
export default function Footer() {
  return (
    <Box sx={{ width: "100%", position: "relative", height: "50vh" }}>
      <Image
        src="/footer.webp"
        layout="fill"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
        alt="footer"
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,.7)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: "33px",
          }}>
          CODED BY NIMA
        </Typography>
        <Link href="https://github.com/Nima-firoozi/">
          <IconButton
            sx={{
              backgroundColor: "black",
              fontSize: "50px",
              color: "green",
              border: "3px solid green",
            }}>
            <GitHubIcon sx={{ fontSize: " 80px" }} />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
