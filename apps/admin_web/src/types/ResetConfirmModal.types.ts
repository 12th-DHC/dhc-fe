export type ResetConfirmModalProps = {
  onConfirm: (password: string) => void;
  onClose: () => void;
  isPending?: boolean;
  isSuccess?: boolean;
  successMessage?: string | null;
  errorMessage?: string | null;
};
