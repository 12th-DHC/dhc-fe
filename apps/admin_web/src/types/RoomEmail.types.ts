export type EmailStatus = "complete" | "partial" | "mismatch";

export type RoomEmail = {
  room: string;
  studentA: { name: string; email: string | null };
  studentB: { name: string; email: string | null };
};
