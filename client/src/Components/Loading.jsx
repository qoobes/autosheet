import { Box, CircularProgress } from "@chakra-ui/react";

export const Loading = () => (
  <Box
    width="100%"
    height="90vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <CircularProgress style={{ color: "#EBBC56" }} color="#EBBC56" />
  </Box>
);

export const SimpleLoadingView = () => (
  <Box
    width="100%"
    height="60vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <CircularProgress style={{ color: "white" }} color="white" />
  </Box>
);
