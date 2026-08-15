import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  box-sizing: border-box;
  width: 220px;
  flex-shrink: 0;
  padding: 24px 16px;
  border-right: 1px solid var(--border);
  position: sticky;
  top: 0;
  height: 100svh;
  overflow-y: auto;
`;

export const NavItem = styled(NavLink)`
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
