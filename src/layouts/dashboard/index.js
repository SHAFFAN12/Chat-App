import { Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import React from "react";
import { Outlet } from "react-router-dom";
import  {NavButtons}  from "../../data";

import  Logo  from "../../assets/images/logo.ico";

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme)
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}
        >

        <Stack direction="column" alignItems={"center"} sx={{ width: "100%" }} spacing={3}>
          <Box sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}
          >
            <img src={Logo} alt={"Chat App Logo"} />
          </Box>

          <Stack spacing={3}>
            {NavButtons.map((el) =><IconButton key={el.index}>{el.icon}</IconButton>)};
            {/* <Divider /> */}
            {/* <IconButton> */}
            {/* <Gear /> */}
            {/* </IconButton> */}
          </Stack>

        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
