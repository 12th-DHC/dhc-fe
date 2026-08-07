export interface UncheckedRoom {
  roomId: string;
  roomNumber: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
}

export interface SendCleaningAlertResult {
  successCount: number;
  failedEmails: string[];
}
