"use client";
import {
  Box,
  List,
  ListItem,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import useStore from "@/app/Store/Store";
import { Add, Remove } from "@mui/icons-material";
import Image from "next/image";
export default function BasketList() {
  const [open, setOpen] = useState(false);
  const { plus, del, minus, basket } = useStore();
  const [massage, setMassage] = useState("");
  const [sev, setSev] = useState("");
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  function addHandle(id) {
    if (!plus(id)) {
      setMassage("بیشتر از موجودی");
      setSev("error");
      handleOpen();
    }
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
      <List
        sx={{
          overflow: "hidden",
          borderRadius: "18px",
          border: "3px solid black",
          paddingBottom: "10px",
          marginBottom: "10px",
          width: {
            xs: "100%",
            lg: "65%",
          },
        }}>
        <ListItem
          sx={{
            width: "100%",
            "&  *": {
              display: "flex",
            },
          }}>
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              نام محصول
            </Typography>
          </Box>
          <Box sx={{ width: "25%", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              تعداد
            </Typography>
          </Box>
          <Box sx={{ width: "25%", justifyContent: "center" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              قیمت
            </Typography>
          </Box>
        </ListItem>
        {basket &&
          basket.map((item) => {
            return (
              <ListItem
                key={item.id + item.name}
                sx={{
                  borderTop: "3px solid black",
                  paddingBlock: "0px",
                  width: "100%",
                  "&  *": {
                    display: "flex",
                  },
                }}>
                <Box
                  sx={{
                    width: "50%",
                    display: "flex",
                    gap: "10px",
                    height: "100%",
                    alignItems: "center",
                  }}>
                  <Box
                    sx={{
                      borderLeft: "2px solid black",
                      height: "100px",
                      width: "100px",
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      paddingBlock: "5px",
                    }}>
                    <Typography sx={{ fontSize: "25px", textAlign: "right" }}>
                      {item.name}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="error"
                      sx={{
                        width: "130px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        border: "2px solid red",
                      }}
                      onClick={() => {
                        del(item.id);
                      }}>
                      پاک کردن
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ width: "25%", justifyContent: "center" }}>
                  <IconButton
                    sx={{ backgroundColor: "green", marginLeft: "8px" }}
                    onClick={() => {
                      addHandle(item.id);
                    }}>
                    <Add></Add>
                  </IconButton>
                  <Typography sx={{ fontSize: "25px" }}>
                    {item.count}
                  </Typography>
                  <IconButton
                    sx={{ backgroundColor: "red", marginRight: "8px" }}
                    onClick={() => {
                      minus(item.id);
                    }}>
                    <Remove></Remove>
                  </IconButton>
                </Box>
                <Box sx={{ width: "25%", justifyContent: "center" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "20px",
                        md: "25px",
                      },
                    }}>
                    {item.price + " تومان"}
                  </Typography>
                </Box>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}
