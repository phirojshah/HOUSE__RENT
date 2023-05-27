import { Menu } from "antd";
import GridViewIcon from "@mui/icons-material/GridView";
import DashboardIcon from "@mui/icons-material/Dashboard";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { useNavigate } from "react-router";
function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        items={[
          {
            label: "Dasboard",
            icon: <DashboardIcon />,
            key: "/admindashboard",
          },

          {
            label: "Properties",
            icon: <OtherHousesIcon />,
            key: "/adminproperties",
          },

          {
            label: "Users",
            icon: <PeopleOutlineIcon />,
            key: "/adminusers",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
