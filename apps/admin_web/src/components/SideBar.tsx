import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NAV_ITEMS = [
  { label: "대시보드", path: "/" },
  { label: "전체 호실 통계", path: "/rooms" },
  { label: "이메일 관리", path: "/emails" },
  { label: "설정", path: "/settings" },
] as const;

export function Sidebar() {
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

const SidebarWrapper = styled.aside`
  width: 220px;
  flex-shrink: 0;
  padding: 24px 16px;
  border-right: 1px solid var(--border);
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 10px 16px;
  margin-bottom: 4px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  color: #374151;
  text-decoration: none;

  &:hover {
    background: #f9fafb;
  }

  &.active {
    font-weight: 700;
    color: #9333ea;
    background: #f3e8ff;
  }
`;
