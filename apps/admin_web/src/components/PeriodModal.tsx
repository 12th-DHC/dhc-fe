import { useEffect, useState } from "react";
import type { PeriodModalProps } from "../types/PeriodModal.types";
import {
  Overlay,
  ModalCard,
  ModalHeader,
  ModalTitle,
  CloseButton,
  SectionLabel,
  OptionGroup,
  MonthGrid,
  WeekGrid,
  OptionButton,
  CancelButton,
  Footer,
} from "../styles/PeriodModal.style";
import { Button } from "@repo/ui";

function PeriodModal({ month, week, onConfirm, onClose }: PeriodModalProps) {
  const [draftMonth, setDraftMonth] = useState(month);
  const [draftWeek, setDraftWeek] = useState(week);

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
      aria-label="기간 선택"
    >
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>기간 선택</ModalTitle>
          <CloseButton type="button" onClick={onClose} aria-label="닫기">
            ✕
          </CloseButton>
        </ModalHeader>

        <OptionGroup>
          <SectionLabel>월</SectionLabel>
          <MonthGrid>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
              <OptionButton
                key={value}
                type="button"
                $selected={draftMonth === value}
                onClick={() => setDraftMonth(value)}
              >
                {value}월
              </OptionButton>
            ))}
          </MonthGrid>
        </OptionGroup>

        <OptionGroup>
          <SectionLabel>주차</SectionLabel>
          <WeekGrid>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
              <OptionButton
                key={value}
                type="button"
                $selected={draftWeek === value}
                onClick={() => setDraftWeek(value)}
              >
                {value}주차
              </OptionButton>
            ))}
          </WeekGrid>
        </OptionGroup>

        <Footer>
          <CancelButton type="button" onClick={onClose}>
            취소
          </CancelButton>
          <Button
            $width="50%"
            $padding="12px 0"
            $fontSize="15px"
            type="button"
            onClick={() => onConfirm(draftMonth, draftWeek)}
          >
            적용
          </Button>
        </Footer>
      </ModalCard>
    </Overlay>
  );
}

export default PeriodModal;
