import { IconButton, Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
export default function ContactPage() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}>
      <Typography
        sx={{
          width: "100%",
          color: "white",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "10px",
        }}>
        ارتباط با من
      </Typography>
      <Box
        sx={{
          gap: "20px",
          width: "100%",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}>
        <Link href="https://www.instagram.com/nima_frontzi_dev?igsh=cGQ3OXE4d3N3NWJh&utm_source=qr">
          <IconButton>
            <InstagramIcon
              sx={{ color: "white", fontSize: "55px" }}></InstagramIcon>
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/nima-firoozi-55a909306">
          <IconButton>
            <LinkedInIcon
              sx={{ color: "white", fontSize: "55px" }}></LinkedInIcon>
          </IconButton>
        </Link>
        <Link href="https://github.com/Nima-firoozi">
          <IconButton>
            <GitHubIcon sx={{ color: "white", fontSize: "55px" }}></GitHubIcon>
          </IconButton>
        </Link>
        <Link href="tel:+989023083861">
          <IconButton>
            <PhoneIcon sx={{ color: "white", fontSize: "55px" }}></PhoneIcon>
          </IconButton>
        </Link>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingBlock: "10px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}>
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
