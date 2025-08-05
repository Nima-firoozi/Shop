"use client";

import { Drawer, IconButton, Link, List, ListItem } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function HmberMenue({ open, changeOpen }) {
  const items = [
    { name: "محصولات خانگی", src: "/shopKh" },
    { name: "محصولات هورکا", src: "/shopHoo" },
    { name: "درباره ما", src: "/about" },
    { name: "تماس با ما", src: "/contact" },
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      variant="temporary"
      onClose={changeOpen}
      PaperProps={{
        sx: {
          width: 300,
          borderRadius: "16px 0 0 16px",
          backgroundColor: "background.paper",
          boxShadow: "0px 8px 10px -5px rgba(0,0,0,0.2)",
          overflow: "hidden",
        },
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          },
        },
      }}>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
            width: "100%",
            position: "relative",
          }}>
          <Image alt="bomanoo" src="/logo.svg" width="100" height="100"></Image>

          <IconButton
            sx={{
              position: "absolute",
              left: "0px",
              border: "2px solid #F5F5F5",
            }}
            onClick={changeOpen}>
            <CloseIcon />
          </IconButton>
        </div>

        <List
          sx={{
            width: "100%",
          }}>
          {items.map((item) => {
            return (
              <ListItem
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  backgroundColor: "#F5F5F5",
                  marginBottom: "10px",
                }}>
                <Link
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    paddingBlock: "15px",
                    width: "100%",
                    height: "100%",
                    textAlign: "start",
                  }}
                  href={item.src}>
                  {item.name}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
