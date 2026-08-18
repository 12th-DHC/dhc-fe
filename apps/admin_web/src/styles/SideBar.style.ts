import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const SidebarWrapper = styled.aside`
  width: 220px;
  flex-shrink: 0;
  padding: 24px 16px;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
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

export const LogoutButton = styled.button`
  align-self: flex-start;
  margin-top: auto;
  background: #fff;
  color: #dc2626;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #fee2e2;
    border-color: #dc2626;
  }
`;
