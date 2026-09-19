import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(17, 24, 39, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalCard = styled.div`
  width: 360px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 700;
  color: #111827;
`;

export const ModalDesc = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #6b7280;
`;

export const PasswordInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  margin-top: 16px;

  &:focus {
    outline: none;
    border-color: #dc2626;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

export const CancelButton = styled.button`
  width: 50%;
  height: 44px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  color: #374151;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

export const ConfirmButton = styled.button`
  width: 50%;
  height: 44px;
  border: none;
  border-radius: 8px;
  background: #dc2626;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #b91c1c;
  }

  &:disabled {
    background: #f3a9a4;
    cursor: not-allowed;
  }
`;

export const DoneButton = styled(ConfirmButton)`
  width: 100%;
`;
