import { SidebarWrapper, NavItem } from "./SideBar.style";

const NAV_ITEMS = [
  { label: "대시보드", path: "/" },
  { label: "전체 호실 통계", path: "/rooms" },
  { label: "이메일 관리", path: "/emails" },
  { label: "설정", path: "/settings" },
] as const;

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
