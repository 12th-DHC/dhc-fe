import styled from "@emotion/styled";

export const DropdownWrapper = styled.div`
  position: relative;
  min-width: 76px;
`;

export const DropdownTrigger = styled.button<{ $open?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: #f9fafb;
  color: #111;
  border: 1px solid ${({ $open }) => ($open ? "#954ff8" : "#e5e7eb")};
  border-radius: 8px;
  padding: 8px 10px 8px 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #954ff8;
  }
`;

export const Chevron = styled.span<{ $open?: boolean }>`
  display: inline-block;
  font-size: 10px;
  color: #954ff8;
  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
  transition: transform 0.15s ease;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 20;
  max-height: 220px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.button<{ $selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 6px;
  background: ${({ $selected }) => ($selected ? "#f3e8ff" : "transparent")};
  color: ${({ $selected }) => ($selected ? "#9333ea" : "#111")};
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? 700 : 400)};
  cursor: pointer;

  &:hover {
    background: #f3e8ff;
    color: #9333ea;
  }
`;
