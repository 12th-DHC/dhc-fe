import { mainColor } from "@repo/ui";
import styled from "@emotion/styled";
import type { EmailStatus } from "../types/RoomEmail.types";

const statusColor: Record<EmailStatus, { bg: string; text: string }> = {
  complete: { bg: "#dcfce7", text: "#16a34a" },
  partial: { bg: "#fef3c7", text: "#d97706" },
  mismatch: { bg: "#fee2e2", text: "#dc2626" },
};

export const CardWrapper = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
`;

export const RoomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: #f9fafb;
  border-bottom: 1px solid #eee;
`;

export const RoomNumber = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

export const StatusBadge = styled.span<{ $status: EmailStatus }>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  background: ${({ $status }) => statusColor[$status].bg};
  color: ${({ $status }) => statusColor[$status].text};
`;

export const StudentRow = styled.div`
  display: grid;
  grid-template-columns: 15% 25% 1fr;
  align-items: center;
  padding: 12px 20px;
  font-size: 14px;

  & + & {
    border-top: 1px solid #f1f1f1;
  }
`;

export const StudentLabel = styled.span`
  color: ${mainColor};
  font-weight: 600;
`;

export const StudentName = styled.span`
  color: #111;
  font-weight: 500;
`;

export const StudentEmail = styled.span`
  color: #555;
`;
