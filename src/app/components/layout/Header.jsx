"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import HmberMenue from "../modules/Header/HmberMenue";
import SearchPage from "../modules/Header/SearchPage";
import BasketSideBar from "../modules/Header/BasketSideBar";
import useStore from "@/app/Store/Store";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openBasket, setOpenBasket] = useState(false);
  let basket = useStore((state) => state.basket);
  const listStyle = {
    display: {
      lg: "flex",
      xs: "none",
    },
    height: "100%",
    alignItems: "center",
    gap: "5px",
    "& > *": {
      "& > *": {
        width: "max-content",
        textDecoration: "none",
        transition: "400ms",
        color: "#3B3B3A",
        "&:hover": {
          color: "#00A886",
        },
      },
    },
  };
  const iconStyle = {
    cursor: "pointer",
    color: "black",
    backgroundColor: "#E6C498",
    outlineOffset: "3px",
    outline: "3px solid black",
    borderRadius: "50%",
    transition: "400ms",
    "&:hover": {
      outline: "3px solid #00A886",
    },
  };
  function changeOpen() {
    setOpen(!open);
  }
  function changeOpenSearch() {
    setOpenSearch(!openSearch);
  }
  function changeOpenBasket() {
    setOpenBasket(!openBasket);
  }
  return (
    <>
      <HmberMenue open={open} changeOpen={changeOpen} />
      <BasketSideBar open={openBasket} changeOpen={changeOpenBasket} />
      <SearchPage open={openSearch} changeOpen={changeOpenSearch} />
      <AppBar
        position="fixed"
        sx={{ height: "100px", backgroundColor: "#FFFFFF" }}>
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingInline: {
              xs: "20px",
              sm: "40px",
              lg: "20px",
            },
            "& > *": {
              height: "100%",
              display: "flex",
              alignItems: "center",
            },
          }}>
          <Box
            sx={{
              width: "45%",
              justifyContent: {
                lg: "space-between",
              },
            }}>
            <Box
              sx={{
                alignItems: "center",
                height: "100%",
                display: "flex",
                gap: "10px",
              }}>
              <MenuIcon
                sx={{
                  ...iconStyle,
                  display: {
                    lg: "none",
                  },
                }}
                onClick={changeOpen}
              />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                  "&:hover": {
                    cursor: "pointer",
                    "> .ic": { outlineColor: "#00A886" },
                  },
                  height: "max-content",
                  marginRight: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <SearchIcon
                  className="ic"
                  sx={iconStyle}
                  onClick={changeOpenSearch}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginRight: "20px",
                    color: "black",
                  }}>
                  جستجو...
                </Typography>
              </Box>
            </Box>

            <List sx={listStyle}>
              <ListItem sx={{ alignItems: "center" }}>
                <Link href="/shopKh">محصولات خانگی</Link>
              </ListItem>
              <ListItem sx={{ alignItems: "start" }}>
                <Link
                  style={{ display: "flex", alignItems: "center" }}
                  href="/shopHoo">
                  محصولات هورکا
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              flexDirection: "column",
              justifyContent: "end",
              width: "10%",
            }}>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="bonmano"
                width="100"
                height="80"></Image>
            </Link>
            <Box
              sx={{
                height: "5px",
                width: "120px",
                backgroundColor: " #00A886",
                borderRadius: "5px",
              }}></Box>
          </Box>
          <Box
            sx={{
              justifyContent: {
                xs: "end",
                lg: "space-between",
              },
              width: "45%",
            }}>
            <List sx={listStyle}>
              <ListItem sx={{ alignItems: "center" }}>
                <Link href="/about">درباره ما</Link>
              </ListItem>
              <ListItem sx={{ alignItems: "center" }}>
                <Link href="/contact">تماس با ما</Link>
              </ListItem>
            </List>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}>
              <SearchIcon
                sx={{
                  ...iconStyle,
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
                onClick={changeOpenSearch}
              />
              <PersonIcon
                sx={{
                  ...iconStyle,
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex", 
                  alignItems: "center",
                  alignContent: "center",
                  position: "relative",
                  padding: "3px",
                }}>
                <ShoppingCartIcon sx={iconStyle} onClick={changeOpenBasket} />
                <Typography
                  component="span"
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    color: "white",
                    backgroundColor: "#00A886",
                    width: "18px",
                    height: "18px",
                    borderRadius: "45%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translate(50%, -50%)",
                  }}>
                  {basket.length}
                </Typography>
              </Box>
              <FavoriteBorderIcon
                sx={{
                  ...iconStyle,
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

