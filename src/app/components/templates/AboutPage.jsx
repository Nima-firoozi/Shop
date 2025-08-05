import { Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
export default function AboutPage() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        paddingBottom: "30px",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(/about.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}>
      <Typography
        variant="body1"
        sx={{
          borderRadius: "15px",
          width: "80%",
          backgroundColor: "rgba(0,0,0,0.8)",
          padding: "10px",
          fontSize: "30px",
          color: "white",
          "& span": {
            color: "#4caf50",
          },
        }}>
        این سایت برای نشان دادن مهارت فرانت اند (<span>React</span>,{" "}
        <span>Mui</span>, <span>Zustand</span>, <span>Next</span>)<br /> توسط
        نیما فیروزی با الگوبرداری از سایت بنمانو طراحی شده است.
      </Typography>
      <Box
        sx={{
          width: "100%",
          marginBlock: "10px",
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
            href="/contact"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
            }}>
            ارتباط با ما
          </Link>
        </Button>
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
