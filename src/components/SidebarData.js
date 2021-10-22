import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ViewListIcon from '@mui/icons-material/ViewList';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export const SidebarData=[

{
    title:"Altamas khan",
    icon: <AccountCircleIcon sx={{ fontSize: 40 }} />,
    link:"/dashbord"
},
{
    title:"Dashbord",
    icon: <DashboardCustomizeIcon/>,
    link:"/dashbord"
    
},


{
    title:"user list",
    icon: <ViewListIcon fontSize="small"/>,
    link:"/userlist"
},
{
    title:"add user",
    icon: <GroupAddIcon fontSize="small"/>,
    link:"/adduser"
},

] 
  


