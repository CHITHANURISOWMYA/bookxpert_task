// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Box,
//   Typography
// } from "@mui/material";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import BusinessIcon from "@mui/icons-material/Business";
// import WorkIcon from "@mui/icons-material/Work";
// import AssessmentIcon from "@mui/icons-material/Assessment";

// const drawerWidth = 240;

// export default function Sidebar() {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         [`& .MuiDrawer-paper`]: {
//           width: drawerWidth,
//           boxSizing: "border-box",
//         },
//       }}
//     >
//       <Toolbar>
//         <Typography variant="h6" fontWeight="bold">
//           Company
//         </Typography>
//       </Toolbar>

//       <Box sx={{ overflow: "auto" }}>
//         <List>
//           <ListItemButton selected>
//             <ListItemIcon>
//               <DashboardIcon />
//             </ListItemIcon>
//             <ListItemText primary="Dashboard" />
//           </ListItemButton>

//           <ListItemButton>
//             <ListItemIcon>
//               <PeopleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Employees" />
//           </ListItemButton>

//           <ListItemButton>
//             <ListItemIcon>
//               <BusinessIcon />
//             </ListItemIcon>
//             <ListItemText primary="Organisation" />
//           </ListItemButton>

//           <ListItemButton>
//             <ListItemIcon>
//               <WorkIcon />
//             </ListItemIcon>
//             <ListItemText primary="Projects" />
//           </ListItemButton>

//           <ListItemButton>
//             <ListItemIcon>
//               <AssessmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Reports" />
//           </ListItemButton>
//         </List>
//       </Box>
//     </Drawer>
//   );
// }


import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const drawerWidth = 260;

const menuItems = [
  { label: "Dashboard", icon: <DashboardOutlinedIcon />, active: true },
  { label: "Employees", icon: <PeopleOutlineIcon />, active: false },
  { label: "Organisation", icon: <BusinessOutlinedIcon />, active: false },
  { label: "Projects", icon: <WorkOutlineIcon />, active: false },
  { label: "Reports", icon: <AssessmentOutlinedIcon />, active: false },
];

export default function Sidebar() {
  return (
   <Drawer
  variant="permanent"
  sx={{
    
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      backgroundColor: "transparent", // dark blue/gray color
      color: "#fff", // white text for menu
      borderRight: "none", // remove border
    },
  }}
>

      {/* Logo */}
      <Box sx={{ px: 3, py: 2 ,margin:"30px 0 0 30px"}}>
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ fontSize: 20 }}
        >
          BookXpert
        </Typography>
      </Box>

      {/* Menu */}
      <List sx={{ px: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.label}
            sx={{
              height: 44,
              borderRadius: 1.5,
              mb: 0.5,
              px: 2,
              position: "relative",
              backgroundColor: item.active ? "#313b4dff" : "transparent",
              "&::before": item.active
                ? {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 6,
                    bottom: 6,
                    width: 4,
                    borderRadius: 2,
                    backgroundColor: "#1976d2",
                  }
                : {},
              "&:hover": {
                backgroundColor: "#6c757eff"
              },
            }}
          >
            {/* <ListItemIcon
              sx={{
                minWidth: 36,
                color: item.active ? "#1976d2" : "#6b7280",
              }}
            > */}

            <ListItemIcon sx={{ minWidth: 36, color: item.active ? "#3b82f6" : "#e7eaf0ff" }}>
              {item.icon}
            </ListItemIcon>

            {/* <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: 15,
                fontWeight: item.active ? 600 : 700,
                color: item.active ? "#1976d2" : "#374151",
                padding:"10px 10px 10px 0"
              }}
            /> */}

            <ListItemText
  primary={item.label}
  primaryTypographyProps={{
    fontSize: 15,
    fontWeight: item.active ? 600 : 500,
    color: item.active ? "#3b82f6" : "#fff", // active blue, others white
  }}
/>
          </ListItemButton>
        ))}
      </List>

      {/* Footer */}
      <Box sx={{ mt: "auto", px: 3, py: 2 }}>
        <Typography fontSize={13} color="text.secondary">
          bhavani@vrinda
        </Typography>
      </Box>
    </Drawer>
  );
}

