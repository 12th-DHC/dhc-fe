export type PeriodModalProps = {
  month: number;
  week: number;
  onConfirm: (month: number, week: number) => void;
  onClose: () => void;
};
