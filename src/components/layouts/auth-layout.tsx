import { Outlet } from "react-router-dom";
import { Box, Card, CardContent, Typography } from "@mui/material";

export const AuthLayout: React.FC = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "grey.100",
      }}
    >
      <Typography variant="h4" fontWeight="500">
        n2l - logo
      </Typography>
      <Card sx={{ width: "100%", maxWidth: "480px", mt: 4 }}>
        <CardContent sx={{ ":last-child": { pb: 2 } }}>
          <Outlet />
        </CardContent>
      </Card>
    </Box>
  );
};
