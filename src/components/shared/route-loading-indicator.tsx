import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Box, CircularProgress, Fade } from "@mui/material";

export const RouteLoadingIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const navigation = useNavigation();

  React.useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (navigation.state === "loading") {
      timer = setTimeout(() => setIsVisible(true), 300);
    } else {
      setIsVisible(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [navigation.state]);

  return (
    <>
      <Fade in={isVisible} timeout={300}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: (theme) => theme.zIndex.modal + 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CircularProgress size={32} />
        </Box>
      </Fade>
      <Outlet />
    </>
  );
};
