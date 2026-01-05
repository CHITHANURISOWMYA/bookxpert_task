import { Box } from "@mui/material";
import Sidebar from "./sidebar";

const drawerWidth = 24;


export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,
          p: 3,
              background:
      "linear-gradient(180deg, transparent 10%, white 70%, rgba(247, 240, 240, 0.2) 100%)",
        //   backgroundColor: "aliceblue",
        //   backgroundImage: img,
          minHeight: "100vh",
          
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
