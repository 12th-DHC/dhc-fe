import type { RoomEmail, EmailStatus } from "../types/RoomEmail.types";

export function getEmailStatus({ studentA, studentB }: RoomEmail): EmailStatus {
  if (!studentA.email || !studentB.email) return "partial";
  if (studentA.email !== studentB.email) return "mismatch";
  return "complete";
}

export const emailStatusLabel: Record<EmailStatus, string> = {
  complete: "등록완료",
  partial: "일부 미등록",
  mismatch: "이메일 불일치",
};
