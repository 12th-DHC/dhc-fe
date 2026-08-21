import { useNavigate } from "react-router-dom";
import {
  SidebarWrapper,
  NavItem,
  LogoutButton,
} from "../pages/styles/SideBar.style";
import { NAV_ITEMS } from "../constants/NAV_ITEMS";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      {NAV_ITEMS.map(({ label, path }) => (
        <NavItem key={path} to={path} end={path === "/"}>
          {label}
        </NavItem>
      ))}
      <LogoutButton type="button" onClick={() => navigate("/login")}>
        로그아웃
      </LogoutButton>
    </SidebarWrapper>
  );
}

export default Sidebar;
