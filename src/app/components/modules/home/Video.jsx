import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Video() {
  return (
    <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
      <video
        src="/vid.mp4"
        muted
        autoPlay
        loop
        style={{ width: "100%", height: "100%", objectFit: "cover" }}></video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: {
            md: "start",
            xs: "center",
          },
          padding: "7%",
        }}>
        <Box
          sx={{
            width: "max-content",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              md: "start",
              xs: "center",
            },
          }}>
          <Typography
            component="h2"
            style={{
              fontWeight: "bold",
              color: "#e2c095",
              fontSize: "40px",
              marginBottom: "10px",
            }}>
            {"درباره ما"}
          </Typography>
          <Typography
            sx={{
              marginBottom: "20px",
              width: "40vw",
              fontSize: "28px",
              color: "white",
            }}>
            {
              "این سایت توسط نیما فیروزی با الگو برداری از سایت بنمانو طراحی شده است . برای دیدن اطلاعات بیشتر از صفحه درباره ما دیدن کنید."
            }
          </Typography>
          <Button
            variant="outlined"
            sx={{
              border: "2px solid #e2c095",
              borderRadius: "24px",
              width: "130px",
              height: "50px",
            }}>
            <Link
              href="./about"
              style={{
                color: "#e2c095",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
              }}>
              {"درباره ما"}
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
