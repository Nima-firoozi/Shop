"use client";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import useStore from "@/app/Store/Store";
import Image from "next/image";
import { Close } from "@mui/icons-material";
export default function BasketSideBar({ open, changeOpen }) {
  const removeItem = useStore((state) => state.del);
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={changeOpen}
      variant="temporary"
      PaperProps={{
        sx: {
          width: 400,
          borderRadius: "0 16px 16px 0 ",
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
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "16px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "#009879",
          }}>
          <Typography
            sx={{
              color: "white",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "24px",
              height: "100%",
            }}>
            {"سبد خرید"}
          </Typography>
          <IconButton
            onClick={changeOpen}
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              transition: "400ms",
              "&:hover": {
                color: "red",
              },
            }}>
            <CloseIcon />
          </IconButton>
        </div>
        <List sx={{ display: "flex", flexDirection: "column", gap: "13px" }}>
          {useStore((state) => state.basket).map((item) => {
            return (
              <ListItem
                key={item.name + item.id}
                sx={{
                  display: "flex",
                  borderRadius: "13px",
                  backgroundColor: "rgb(188, 161, 161)",
                  overflow: "hidden",
                  alignItems: "center",
                  paddingInline: "10px",
                  gap: "15px",
                  height: "50px",
                }}>
                <IconButton
                  onClick={() => removeItem(item.id)}
                  sx={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}>
                  <Close sx={{ fontSize: "30px", color: "black" }}></Close>
                </IconButton>
                <Box
                  sx={{
                    borderLeft: "1px solid black",
                    height: "100%",
                    aspectRatio: "1/1",
                    position: "relative",
                  }}>
                  <Image
                    alt="bonmanoo"
                    src={"/" + item.img}
                    layout="fill"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  {item.name}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "16px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "red",
          }}>
          <Typography
            sx={{
              color: "white",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "24px",
              height: "100%",
            }}>
            <Link
              onClick={changeOpen}
              href="./basket"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                textDecoration: "none",
                color: "white",
              }}>
              {"مشاهده سبد خرید "}
            </Link>
          </Typography>
        </div>
      </div>
    </Drawer>
  );
}
