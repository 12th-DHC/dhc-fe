import { SidebarWrapper, NavItem } from "../styles/SideBar.style";
import { NAV_ITEMS } from "../constants/NAV_ITEMS";

function Sidebar() {
  return (
    <SidebarWrapper>
      {NAV_ITEMS.map(({ label, path }) => (
        <NavItem key={path} to={path} end={path === "/"}>
          {label}
        </NavItem>
      ))}
    </SidebarWrapper>
  );
}

export default Sidebar;
