import { useNavigate } from "react-router-dom";
import {
  SidebarWrapper,
  NavItem,
  LogoutButton,
} from "../styles/SideBar.style";
import { NAV_ITEMS } from "../constants/NAV_ITEMS";
import { clearTokens } from "../utils/auth";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearTokens();
    navigate("/login");
  };

  return (
    <SidebarWrapper>
      {NAV_ITEMS.map(({ label, path }) => (
        <NavItem key={path} to={path} end={path === "/"}>
          {label}
        </NavItem>
      ))}
      <LogoutButton type="button" onClick={handleLogout}>
        로그아웃
      </LogoutButton>
    </SidebarWrapper>
  );
}

export default Sidebar;
