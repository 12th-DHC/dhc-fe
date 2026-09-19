import { useEffect, useState } from "react";
import type { ResetConfirmModalProps } from "../types/ResetConfirmModal.types";
import {
  Overlay,
  ModalCard,
  ModalTitle,
  ModalDesc,
  PasswordInput,
  Footer,
  CancelButton,
  ConfirmButton,
  DoneButton,
} from "../styles/ResetConfirmModal.style";

function ResetConfirmModal({
  onConfirm,
  onClose,
  isPending,
  isSuccess,
  successMessage,
  errorMessage,
}: ResetConfirmModalProps) {
  const [password, setPassword] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Overlay
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="전체 호실 초기화"
    >
      <ModalCard onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
          <>
            <ModalTitle>{successMessage ?? "초기화 완료"}</ModalTitle>
            <ModalDesc>
              호실 및 청소 체크 기록이 모두 초기화되었습니다.
            </ModalDesc>
            <Footer>
              <DoneButton type="button" onClick={onClose} autoFocus>
                확인
              </DoneButton>
            </Footer>
          </>
        ) : (
          <>
            <ModalTitle>정말 초기화 하시겠습니까?</ModalTitle>
            <ModalDesc>
              한학기 동안의 호실 및 청소 체크 기록이 모두 삭제됩니다. 이 작업은
              되돌릴 수 없습니다.
            </ModalDesc>
            <PasswordInput
              type="password"
              placeholder="초기화하려면 비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && password && !isPending) {
                  onConfirm(password);
                }
              }}
              autoFocus
            />
            {errorMessage && (
              <ModalDesc style={{ color: "#dc2626" }}>{errorMessage}</ModalDesc>
            )}
            <Footer>
              <CancelButton
                type="button"
                onClick={onClose}
                disabled={isPending}
              >
                취소
              </CancelButton>
              <ConfirmButton
                type="button"
                disabled={!password || isPending}
                onClick={() => onConfirm(password)}
              >
                {isPending ? "초기화 중..." : "초기화"}
              </ConfirmButton>
            </Footer>
          </>
        )}
      </ModalCard>
    </Overlay>
  );
}

export default ResetConfirmModal;
