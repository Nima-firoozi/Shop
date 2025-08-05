"use client";

import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Link from "next/link";

export default function SearchPage({ open, changeOpen }) {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  let sucess = false;
  async function getData() {
    axios
      .get("https://68875657071f195ca9804edb.mockapi.io/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={changeOpen}
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
          borderRadius: 0,
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(5px)",
          boxShadow: "none",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          overflow: "hidden",
        },
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      }}>
      <IconButton
        onClick={changeOpen}
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          color: "text.primary",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
        }}>
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          marginInline: "auto",
          marginTop: "20%",
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "300px",
          width: "100%",

          "&>*": {
            width: "100%",
          },
        }}>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="جستجو..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <List
          sx={{
            display: value ? "block" : "none",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "5px",
          }}>
          {data &&
            data.map((val, i) => {
              if (value !== "" && val.name.includes(value)) {
                sucess = true;
                return (
                  <ListItem
                    key={val.id + val.name}
                    sx={{
                      marginBottom: "10px",
                      backgroundColor: "#F5F5F5",
                      borderRadius: "15px",
                      height: "45px",
                    }}>
                    <Link
                      onClick={changeOpen}
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        color: "black",
                        textDecoration: "none",
                      }}
                      href={"/product/product-" + val.id}>
                      {val.name}
                    </Link>
                  </ListItem>
                );
              } else if (
                i == data.length - 1 &&
                value !== "" &&
                sucess === false
              ) {
                return (
                  <ListItem
                    key={"موردی یافت نشد"}
                    sx={{
                      marginBottom: "10px",
                      backgroundColor: "red",
                      borderRadius: "15px",
                      height: "45px",
                    }}>
                    {"موردی یافت نشد"}
                  </ListItem>
                );
              }
            })}
        </List>
      </Box>
    </Drawer>
  );
}
